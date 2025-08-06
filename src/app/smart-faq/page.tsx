
'use client';

import { useState, useRef, useEffect, ReactNode } from 'react';
import { Bot, User, ChevronsRight, RotateCcw, Package, Building, Wrench, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { CATEGORIZED_FAQ_DATA, HOW_IT_WORKS_STEPS, SERVICES, FEATURES, PACKAGES_DATA, CITIES_COVERED, PROJECTS } from '@/lib/constants';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import type { PackageType, Project } from '@/lib/constants';

type Message = {
  sender: 'bot' | 'user';
  text: string | ReactNode;
};

type Option = {
  label: string;
  icon?: React.ElementType;
  action: () => void;
};

type ConversationStage = 'start' | 'faq_categories' | 'faq_questions' | 'packages_cities' | 'packages_types' | 'packages_list' | 'projects_cities' | 'projects_categories' | 'projects_list' | 'services' | 'how_it_works' | 'features' | 'answer';

const MainMenuIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 6h16M4 12h16M4 18h16"/>
  </svg>
);


export default function SmartFaqPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [options, setOptions] = useState<Option[]>([]);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatContainerRef.current?.scrollTo({
      top: chatContainerRef.current.scrollHeight,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, options]);

  const addMessage = (message: Message) => {
    setMessages(prev => [...prev, message]);
  };

  // --- Main Menu ---
  const showMainMenu = (introText = "How can I help you today? Please select a topic to explore:") => {
    addMessage({ sender: 'bot', text: introText });
    setOptions([
      { label: "Frequently Asked Questions", icon: Info, action: () => handleFaqStart() },
      { label: "Our Packages & Pricing", icon: Package, action: () => handlePackagesStart() },
      { label: "Explore Our Projects", icon: Building, action: () => handleProjectsStart() },
      { label: "Our Services", icon: Wrench, action: () => handleServices() },
    ]);
  };
  
  const addBackToMainMenuOption = () => {
    setOptions(prev => [...prev, { label: "Back to Main Menu", icon: MainMenuIcon, action: () => showMainMenu() }]);
  };

  // --- FAQ Flow ---
  const handleFaqStart = () => {
    addMessage({ sender: 'user', text: "I have a question." });
    addMessage({ sender: 'bot', text: "Great! Please select a category to get started:" });
    setOptions(
      Object.keys(CATEGORIZED_FAQ_DATA).map(category => ({
        label: category,
        action: () => handleFaqCategorySelect(category)
      }))
    );
  };
  
  const handleFaqCategorySelect = (category: string) => {
    addMessage({ sender: 'user', text: category });
    const questions = CATEGORIZED_FAQ_DATA[category];
    addMessage({ sender: 'bot', text: `Here are the questions for the "${category}" category. Please select one:` });
    setOptions(
      questions.map(faq => ({
        label: faq.question,
        action: () => handleFaqQuestionSelect(faq.question, faq.answer)
      }))
    );
  };

  const handleFaqQuestionSelect = (question: string, answer: string) => {
    addMessage({ sender: 'user', text: question });
    addMessage({ sender: 'bot', text: answer });
    addMessage({ sender: 'bot', text: "Can I help with anything else?" });
    setOptions([
        ...Object.keys(CATEGORIZED_FAQ_DATA).map(category => ({
            label: `Ask about ${category}`,
            action: () => handleFaqCategorySelect(category)
        })),
        { label: "Back to Main Menu", icon: MainMenuIcon, action: () => showMainMenu() }
    ]);
  };

  // --- Packages Flow ---
  const handlePackagesStart = () => {
    addMessage({ sender: 'user', text: "Tell me about your packages." });
    addMessage({ sender: 'bot', text: "Of course. First, please select your city to see relevant packages and pricing:" });
    setOptions(CITIES_COVERED.map(city => ({ label: city, action: () => handlePackageCitySelect(city) })));
  };

  const handlePackageCitySelect = (city: string) => {
    addMessage({ sender: 'user', text: `City: ${city}` });
    addMessage({ sender: 'bot', text: `Great! For ${city}, are you interested in "Homes" or "Luxury Homes" packages?` });
    setOptions([
      { label: "Homes", action: () => handlePackageTypeSelect(city, "Homes") },
      { label: "Luxury Homes", action: () => handlePackageTypeSelect(city, "Luxury Homes") }
    ]);
  };
  
  const handlePackageTypeSelect = (city: string, type: PackageType) => {
     addMessage({ sender: 'user', text: type });
     const packages = PACKAGES_DATA[city]?.[type] || [];
     if(packages.length > 0) {
        const packageList = (
            <div className="space-y-2">
                <p>Here are the {type} packages available in {city}:</p>
                <ul className="list-disc list-inside">
                    {packages.map(p => <li key={p.name}><b>{p.name}</b>: Starts at ₹{p.price.toLocaleString('en-IN')}/sqft</li>)}
                </ul>
            </div>
        );
        addMessage({ sender: 'bot', text: packageList });
     } else {
        addMessage({ sender: 'bot', text: `Sorry, I couldn't find any "${type}" packages for ${city}.`})
     }
     addMessage({ sender: 'bot', text: "What would you like to do next?" });
     setOptions([
         { label: "View packages for another city", action: handlePackagesStart },
         { label: "Back to Main Menu", icon: MainMenuIcon, action: () => showMainMenu() }
     ]);
  }

  // --- Projects Flow ---
  const handleProjectsStart = () => {
    addMessage({ sender: 'user', text: "Show me your projects." });
    addMessage({ sender: 'bot', text: "I can do that. Please select a city to view our projects:" });
    setOptions(CITIES_COVERED.map(city => ({ label: city, action: () => handleProjectsCitySelect(city) })));
  };
  
  const handleProjectsCitySelect = (city: string) => {
    addMessage({ sender: 'user', text: `City: ${city}` });
    addMessage({ sender: 'bot', text: `Excellent. Now, filter projects in ${city} by category:` });
    const categories = ['All', 'Construction', 'Renovation', 'Interiors'];
    setOptions(categories.map(cat => ({ label: cat, action: () => handleProjectsCategorySelect(city, cat)})));
  }

  const handleProjectsCategorySelect = (city: string, category: string) => {
    addMessage({ sender: 'user', text: category });
    const cityProjects = PROJECTS.filter(p => p.city === city);
    const filteredProjects = category === 'All' ? cityProjects : cityProjects.filter(p => p.category === category);
    
    if (filteredProjects.length > 0) {
        const projectList = (
            <div className="space-y-2">
                <p>Found {filteredProjects.length} project(s) for '{category}' in {city}:</p>
                <ul className="list-disc list-inside">
                    {filteredProjects.map(p => <li key={p.id}>{p.title}</li>)}
                </ul>
            </div>
        );
        addMessage({ sender: 'bot', text: projectList });
    } else {
        addMessage({ sender: 'bot', text: `No '${category}' projects found in ${city}.` });
    }
    
    addMessage({ sender: 'bot', text: "What would you like to do next?" });
    setOptions([
         { label: "View projects in another city", action: handleProjectsStart },
         { label: "Back to Main Menu", icon: MainMenuIcon, action: () => showMainMenu() }
     ]);
  }

  // --- Simple Info Flows ---
  const handleServices = () => {
    addMessage({ sender: 'user', text: "What services do you offer?" });
    const serviceList = (
        <div className="space-y-2">
            <p>We offer a complete range of services. Here are our core offerings:</p>
            <ul className="list-disc list-inside">
                {SERVICES.map(s => <li key={s.title}><b>{s.title}</b>: {s.description}</li>)}
            </ul>
        </div>
    );
    addMessage({ sender: 'bot', text: serviceList });
    addMessage({ sender: 'bot', text: "You can explore more about our work in the projects section." });
    addBackToMainMenuOption();
  };


  const handleStart = () => {
    setMessages([]);
    showMainMenu("Hello! I'm your virtual assistant. I can help you find information about our services, packages, projects, and answer common questions.");
  };

  useEffect(() => {
    handleStart();
  }, []);

  const MessageBubble = ({ message, index }: { message: Message; index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className={cn("flex items-start gap-3 max-w-sm md:max-w-md w-fit", message.sender === 'user' ? 'self-end' : 'self-start')}
    >
      <div className={cn(
        "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center",
        message.sender === 'bot' ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
      )}>
        {message.sender === 'bot' ? <Bot size={18} /> : <User size={18} />}
      </div>
      <div className={cn(
        "p-3 rounded-lg text-sm",
        message.sender === 'bot' ? 'bg-card border' : 'bg-primary text-primary-foreground'
      )}>
        {message.text}
      </div>
    </motion.div>
  );

  const OptionButton = ({ option, index }: { option: Option; index: number }) => (
     <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: index * 0.05 }}
     >
        <Button
          variant="outline"
          className="w-full justify-start h-auto text-left py-2.5 px-4"
          onClick={option.action}
        >
          {option.icon ? <option.icon className="mr-2 h-4 w-4 text-primary" /> : <ChevronsRight className="mr-2 h-4 w-4 text-primary" />}
          {option.label}
        </Button>
     </motion.div>
  );

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-orange-50/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-12">
            <h1 className="text-3xl font-headline font-bold text-foreground md:text-5xl">Smart Assistant</h1>
            <p className="mt-4 text-md md:text-lg text-muted-foreground max-w-3xl mx-auto text-balance">
                Get instant answers to your questions by interacting with our guided chat. Select a topic to begin.
            </p>
        </div>

        <Card className="max-w-3xl mx-auto shadow-2xl">
            <CardHeader className="flex flex-row items-center justify-between p-4 md:p-6">
                <div>
                    <CardTitle>Conversation</CardTitle>
                    <CardDescription>Select an option to proceed</CardDescription>
                </div>
                 <Button variant="ghost" size="sm" onClick={handleStart} className="flex items-center gap-2">
                    <RotateCcw size={14} />
                    Start Over
                </Button>
            </CardHeader>
          <CardContent className="p-2 md:p-4">
            <div 
              ref={chatContainerRef}
              className="h-[50vh] overflow-y-auto space-y-6 flex flex-col p-4 bg-muted/50 rounded-lg"
            >
              <AnimatePresence>
                {messages.map((msg, index) => (
                  <MessageBubble key={index} message={msg} index={index} />
                ))}
              </AnimatePresence>
            </div>
            
            <div className="mt-6 space-y-2">
                 <AnimatePresence>
                    {options.map((opt, index) => (
                        <OptionButton key={index} option={opt} index={index} />
                    ))}
                 </AnimatePresence>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

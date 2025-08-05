'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ArrowRight, User, Mail, Phone, FileText, MapPin, Calendar } from 'lucide-react';

interface JobApplicationDialogProps {
  jobTitle: string;
  jobLocation: string;
  children: React.ReactNode;
}

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  experience: string;
  location: string;
  resumeUrl: string;
  coverLetter: string;
}

export default function JobApplicationDialog({ jobTitle, jobLocation, children }: JobApplicationDialogProps) {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    experience: '',
    location: '',
    resumeUrl: '',
    coverLetter: '',
  });

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const generateWhatsAppMessage = () => {
    const message = `Hi! I'm interested in applying for the *${jobTitle}* position at ${jobLocation}.

Here are my details:

 *Name:* ${formData.fullName}
 *Email:* ${formData.email}
 *Phone:* ${formData.phone}
 *Experience:* ${formData.experience}
 *Current Location:* ${formData.location}
${formData.resumeUrl ? ` *Resume:* ${formData.resumeUrl}` : ''}

*Cover Letter:*
${formData.coverLetter || 'Looking forward to discussing this opportunity with you!'}

Please let me know the next steps in the application process.

Thank you!`;

    return encodeURIComponent(message);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.fullName || !formData.email || !formData.phone) {
      alert('Please fill in all required fields (Name, Email, Phone)');
      return;
    }

    // Generate WhatsApp URL with pre-filled message
    const whatsappMessage = generateWhatsAppMessage();
    const whatsappUrl = `https://wa.me/919214143300?text=${whatsappMessage}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
    
    // Close dialog and reset form
    setOpen(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      experience: '',
      location: '',
      resumeUrl: '',
      coverLetter: '',
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader className="pb-4">
          <DialogTitle className="text-2xl font-headline">Apply for {jobTitle}</DialogTitle>
          <DialogDescription className="text-base">
            Fill out the form below and we'll redirect you to WhatsApp to complete your application.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <User className="h-5 w-5 text-primary" />
              Personal Information
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name *</Label>
                <Input
                  id="fullName"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  required
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="location">Current Location</Label>
                <Input
                  id="location"
                  placeholder="City, State"
                  value={formData.location}
                  onChange={(e) => handleInputChange('location', e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Professional Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" />
              Professional Information
            </h3>
            
            <div className="space-y-2">
              <Label htmlFor="experience">Years of Experience</Label>
              <Select onValueChange={(value) => handleInputChange('experience', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select your experience level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0-1">0-1 years</SelectItem>
                  <SelectItem value="2-3">2-3 years</SelectItem>
                  <SelectItem value="4-5">4-5 years</SelectItem>
                  <SelectItem value="6-10">6-10 years</SelectItem>
                  <SelectItem value="10+">10+ years</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="resumeUrl">Resume/Portfolio Link</Label>
              <Input
                id="resumeUrl"
                type="url"
                placeholder="https://drive.google.com/... or LinkedIn profile"
                value={formData.resumeUrl}
                onChange={(e) => handleInputChange('resumeUrl', e.target.value)}
              />
              <p className="text-sm text-muted-foreground">
                Share a link to your resume, portfolio, or LinkedIn profile
              </p>
            </div>
          </div>

          {/* Cover Letter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <Mail className="h-5 w-5 text-primary" />
              Cover Letter
            </h3>
            
            <div className="space-y-2">
              <Label htmlFor="coverLetter">Tell us about yourself</Label>
              <Textarea
                id="coverLetter"
                placeholder="Why are you interested in this position? What makes you a great fit for our team?"
                value={formData.coverLetter}
                onChange={(e) => handleInputChange('coverLetter', e.target.value)}
                rows={4}
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button type="submit" className="flex-1 group">
              Continue to WhatsApp
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              type="button" 
              variant="outline" 
              onClick={() => setOpen(false)}
              className="flex-1 sm:flex-initial"
            >
              Cancel
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground text-center">
            Your information will be sent via WhatsApp to complete the application process.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
}
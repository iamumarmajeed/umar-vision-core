import { MessageSquare, Linkedin, Mail } from "lucide-react";

const contacts = [
  {
    icon: MessageSquare,
    label: "WhatsApp",
    value: "+92 307 5588988",
    href: "https://wa.me/+923075588988",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "umarmajeedofficial",
    href: "https://linkedin.com/in/umarmajeedofficial",
  },
  {
    icon: Mail,
    label: "Email",
    value: "umarmajeedofficial@gmail.com",
    href: "mailto:umarmajeedofficial@gmail.com",
  },
];

export const ContactSection = () => {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl w-full space-y-12">
        <h2 className="text-4xl md:text-5xl font-bold text-center gradient-text mb-12">
          Get In Touch
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contacts.map((contact, index) => (
            <a
              key={contact.label}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="glass p-6 rounded-lg text-center hover-lift group h-full">
                <div className="inline-flex p-4 rounded-lg bg-primary/10 border border-primary/20 mb-4 group-hover:border-primary/40 transition-all">
                  <contact.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {contact.label}
                </h3>
                <p className="text-sm text-muted-foreground break-words">
                  {contact.value}
                </p>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center pt-8">
          <p className="text-muted-foreground">
            Let's collaborate on the next big AI innovation!
          </p>
        </div>
      </div>
    </section>
  );
};

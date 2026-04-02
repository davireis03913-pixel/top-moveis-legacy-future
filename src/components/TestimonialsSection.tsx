import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Maria Helena S.",
    role: "Cozinha Planejada",
    text: "Simplesmente perfeito! A equipe da TOP Móveis entendeu exatamente o que eu queria. Minha cozinha ficou muito além das expectativas. Recomendo de olhos fechados!",
    rating: 5,
  },
  {
    name: "Carlos Eduardo M.",
    role: "Home Office Completo",
    text: "Profissionalismo do início ao fim. O projeto 3D me deu total segurança antes de aprovar. O resultado final ficou impecável e funcional. Excelente!",
    rating: 5,
  },
  {
    name: "Ana Paula R.",
    role: "Apartamento Completo",
    text: "Fizemos todos os móveis do apartamento com a TOP Móveis e não nos arrependemos. Qualidade excepcional, pontualidade na entrega e um atendimento extraordinário.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="depoimentos" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-medium text-sm tracking-widest uppercase">Depoimentos</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-muted-foreground text-lg">
            A satisfação dos nossos clientes é nosso maior troféu.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <Card key={t.name} className="border-border/50 bg-card hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <Quote className="h-8 w-8 text-accent/30 mb-4" />
                <p className="text-foreground leading-relaxed mb-6">"{t.text}"</p>
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

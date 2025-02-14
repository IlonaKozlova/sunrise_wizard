import React, { useState } from 'react';
import { 
  Youtube,
  Instagram, 
  Send, 
  Star, 
  Play, 
  ChevronLeft, 
  ChevronRight,
  Sparkles,
  Calendar,
  Users,
  Building,
  Heart
} from 'lucide-react';

function App() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);

  const testimonials = [
    {
      text: "Абсолютно невероятное выступление! Фокусы вблизи оставили всех без слов.",
      author: "Мария К., Корпоративное мероприятие",
      rating: 5
    },
    {
      text: "Лучшее решение для нашей свадьбы! Гости до сих пор обсуждают удивительные трюки.",
      author: "Алексей и Юлия, Свадьба",
      rating: 5
    },
    {
      text: "Увлекательно, профессионально и по-настоящему волшебно. Идеальное дополнение к нашему корпоративу.",
      author: "Иван Смирнов, Генеральный директор",
      rating: 5
    }
  ];

  const gallery = [
    "https://images.unsplash.com/photo-1543157145-f78c636d023d?w=800",
    "https://images.unsplash.com/photo-1547234935-80c7145ec969?w=800",
    "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800",
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % gallery.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + gallery.length) % gallery.length);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1503431760783-91f2569f6802?w=1600"
            alt="Портрет фокусника"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-black"></div>
        </div>

        {/* 3D Elements */}
        <img 
          src="https://i.ibb.co/7x2HLK8r/6871736-Photoroom-2.png" 
          alt="" 
          className="absolute top-20 left-20 w-48 h-48 object-contain opacity-30 animate-float"
        />
        <img 
          src="https://i.ibb.co/wrZxMDfp/6871736-Photoroom-3.png" 
          alt="" 
          className="absolute bottom-20 right-20 w-64 h-64 object-contain opacity-20 animate-float-delayed"
        />

        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-8xl font-bold mb-6">МАКС ТРЕФ</h1>
          <p className="text-2xl mb-12 text-gray-300">Мастер микромагии и иллюзий</p>
          
          {/* Promo Video Button */}
          <button className="group relative inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-full text-xl transition-colors">
            <Play className="w-6 h-6" />
            Смотреть промо
            <span className="absolute -inset-0.5 animate-pulse rounded-full bg-purple-600 opacity-75 group-hover:opacity-0 transition-opacity"></span>
          </button>

          {/* Social Links */}
          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
            <div className="flex gap-8 items-center">
              <a href="#" className="text-white/80 hover:text-purple-400 transition-colors">
                <Youtube className="w-8 h-8" />
              </a>
              <a href="#" className="text-white/80 hover:text-purple-400 transition-colors">
                <Instagram className="w-8 h-8" />
              </a>
              <a href="#" className="text-white/80 hover:text-purple-400 transition-colors">
                <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0h-.056zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
              </a>
              <a href="#" className="text-white/80 hover:text-purple-400 transition-colors">
                <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
                  <path d="M19.915 13.028c-.388-.49-.277-.708 0-1.146.005-.005 3.208-4.431 3.538-5.932l.002-.001c.164-.547 0-.949-.793-.949h-2.624c-.668 0-.976.345-1.141.731 0 0-1.336 3.198-3.226 5.271-.61.599-.892.791-1.225.791-.164 0-.419-.192-.419-.739V5.949c0-.656-.187-.949-.74-.949H9.161c-.419 0-.668.306-.668.591 0 .622.945.765 1.043 2.515v3.797c0 .832-.151.985-.486.985-.892 0-3.057-3.211-4.34-6.886-.259-.713-.512-1.001-1.185-1.001H.9c-.749 0-.9.345-.9.731 0 .682.892 4.073 4.148 8.553C6.318 17.343 9.374 19 12.154 19c1.671 0 1.875-.368 1.875-1.001 0-2.922-.151-3.198.686-3.198.388 0 1.056.192 2.616 1.667C19.114 18.217 19.407 19 20.405 19h2.624c.748 0 1.127-.368.909-1.094-.499-1.527-3.871-4.668-4.023-4.878z"/>
                </svg>
              </a>
              <a href="#" className="text-white/80 hover:text-purple-400 transition-colors">
                <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
              </a>
              <a href="#" className="text-white/80 hover:text-purple-400 transition-colors">
                <Send className="w-8 h-8" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-24 relative overflow-hidden">
        <img 
          src="https://i.ibb.co/3yJYXXvw/6871736-Photoroom.png" 
          alt="" 
          className="absolute top-0 left-0 w-72 h-72 object-contain opacity-20 animate-float-slow"
        />
        
        <div className="container mx-auto px-6">
          <h2 className="text-6xl font-bold mb-16 text-center">ВЫСТУПЛЕНИЯ</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-purple-900/30 backdrop-blur-sm p-8 rounded-lg border border-purple-500/20">
              <Calendar className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Частные мероприятия</h3>
              <p className="text-gray-300 mb-6">
                Сделайте ваши особые события по-настоящему волшебными с помощью 
                близкого контакта с магией. Идеально подходит для дней рождения, 
                юбилеев и праздников.
              </p>
              <button className="bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-full transition-colors">
                Забронировать
              </button>
            </div>
            <div className="bg-purple-900/30 backdrop-blur-sm p-8 rounded-lg border border-purple-500/20">
              <Users className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Свадебные торжества</h3>
              <p className="text-gray-300 mb-6">
                Добавьте незабываемые моменты волшебства в ваш свадебный день с 
                изысканной микромагией и чтением мыслей.
              </p>
              <button className="bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-full transition-colors">
                Подробнее
              </button>
            </div>
            <div className="bg-purple-900/30 backdrop-blur-sm p-8 rounded-lg border border-purple-500/20">
              <Building className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Корпоративы</h3>
              <p className="text-gray-300 mb-6">
                Поднимите уровень ваших корпоративных мероприятий с помощью 
                профессионального магического развлечения, которое восхищает гостей.
              </p>
              <button className="bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-full transition-colors">
                Узнать больше
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-purple-900/20 relative">
        <img 
          src="https://i.ibb.co/DDyvqkNF/6871736-Photoroom.png" 
          alt="" 
          className="absolute bottom-0 right-0 w-80 h-80 object-contain opacity-20 animate-float-reverse"
        />
        
        <div className="container mx-auto px-6">
          <h2 className="text-6xl font-bold mb-16 text-center">ГАЛЕРЕЯ</h2>
          <div className="relative max-w-4xl mx-auto">
            <img 
              src={gallery[currentImage]} 
              alt="Галерея" 
              className="w-full h-[600px] object-cover rounded-lg"
            />
            <button 
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-2 rounded-full transition-colors"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button 
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-2 rounded-full transition-colors"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 relative overflow-hidden">
        <img 
          src="https://i.ibb.co/5X6d633j/6871737-Photoroom.png" 
          alt="" 
          className="absolute top-0 right-0 w-64 h-64 object-contain opacity-20 animate-float-slow"
        />
        
        <div className="container mx-auto px-6">
          <h2 className="text-6xl font-bold mb-16 text-center">ОБО МНЕ</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-purple-900/30 backdrop-blur-sm p-8 rounded-lg border border-purple-500/20">
              <Sparkles className="w-12 h-12 text-purple-400 mb-4" />
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                С более чем десятилетним опытом в искусстве магии, я специализируюсь 
                на создании интимных моментов удивления через микромагию и иллюзии. 
                Моя страсть заключается в том, чтобы привносить изумление в жизнь 
                людей через искусство обмана и развлечения.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Мои выступления сочетают классическую магию с современными техниками, 
                создавая уникальный стиль, который получил признание на международных 
                конкурсах магии и частных шоу для именитых клиентов по всему миру.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-purple-900/20 relative">
        <img 
          src="https://i.ibb.co/Mk0sLc6n/11151418-Photoroom.png" 
          alt="" 
          className="absolute bottom-0 left-0 w-72 h-72 object-contain opacity-20 animate-float"
        />
        
        <div className="container mx-auto px-6">
          <h2 className="text-6xl font-bold mb-16 text-center">ОТЗЫВЫ</h2>
          <div className="max-w-3xl mx-auto relative">
            <div className="bg-purple-900/30 backdrop-blur-sm p-8 rounded-lg border border-purple-500/20">
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-xl text-center mb-6">"{testimonials[currentTestimonial].text}"</p>
              <p className="text-center text-gray-400">{testimonials[currentTestimonial].author}</p>
            </div>
            <button 
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-2 rounded-full transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-2 rounded-full transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400">
        <p>© {new Date().getFullYear()} Макс Треф. Все права защищены.</p>
      </footer>
    </div>
  );
}

export default App;
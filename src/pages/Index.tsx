import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const categories = ['Все', 'Современные', 'Классические', 'Лофт', 'Минимализм'];

const products = [
  {
    id: 1,
    name: 'Лампа Nordic White',
    price: 4990,
    oldPrice: 6990,
    category: 'Современные',
    image: 'https://cdn.poehali.dev/projects/93fb3413-c5d3-4cd1-b621-efdba0402b28/files/f7fd6ed9-af7b-4fe1-b800-fe606802f5d0.jpg',
    badge: 'Хит продаж'
  },
  {
    id: 2,
    name: 'Лампа Elegance Brass',
    price: 7990,
    category: 'Классические',
    image: 'https://cdn.poehali.dev/projects/93fb3413-c5d3-4cd1-b621-efdba0402b28/files/8ef0f783-4635-47fb-9531-6c40d0e62929.jpg',
    badge: 'Новинка'
  },
  {
    id: 3,
    name: 'Лампа Industrial Black',
    price: 5490,
    oldPrice: 7490,
    category: 'Лофт',
    image: 'https://cdn.poehali.dev/projects/93fb3413-c5d3-4cd1-b621-efdba0402b28/files/88594075-3b5b-454e-aac5-1237c0a6ed70.jpg',
    badge: 'Скидка -27%'
  },
  {
    id: 4,
    name: 'Лампа Smart LED Pro',
    price: 8990,
    category: 'Современные',
    image: 'https://cdn.poehali.dev/projects/93fb3413-c5d3-4cd1-b621-efdba0402b28/files/f7fd6ed9-af7b-4fe1-b800-fe606802f5d0.jpg',
    badge: 'Умная'
  },
  {
    id: 5,
    name: 'Лампа Vintage Gold',
    price: 6490,
    category: 'Классические',
    image: 'https://cdn.poehali.dev/projects/93fb3413-c5d3-4cd1-b621-efdba0402b28/files/8ef0f783-4635-47fb-9531-6c40d0e62929.jpg',
    badge: 'Премиум'
  },
  {
    id: 6,
    name: 'Лампа Minimal White',
    price: 3990,
    category: 'Минимализм',
    image: 'https://cdn.poehali.dev/projects/93fb3413-c5d3-4cd1-b621-efdba0402b28/files/f7fd6ed9-af7b-4fe1-b800-fe606802f5d0.jpg',
    badge: 'Бестселлер'
  }
];

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState('Все');

  const filteredProducts = selectedCategory === 'Все' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-50/30 to-orange-50/30">
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Icon name="Lightbulb" size={24} className="text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                LightShop
              </h1>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-gray-700 hover:text-primary transition-colors font-medium">
                Главная
              </a>
              <a href="#catalog" className="text-gray-700 hover:text-primary transition-colors font-medium">
                Каталог
              </a>
              <a href="#about" className="text-gray-700 hover:text-primary transition-colors font-medium">
                О нас
              </a>
              <a href="#contacts" className="text-gray-700 hover:text-primary transition-colors font-medium">
                Контакты
              </a>
            </nav>
            <Button className="gap-2 shadow-lg hover:shadow-xl transition-all">
              <Icon name="ShoppingCart" size={18} />
              <span className="font-semibold">Корзина</span>
            </Button>
          </div>
        </div>
      </header>

      <section id="home" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight">
              Освещение для вашего дома
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 font-medium">
              Стильные настольные лампы премиум качества. Создайте идеальную атмосферу!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6 shadow-2xl hover:shadow-primary/50 transition-all">
                <Icon name="ShoppingBag" size={20} className="mr-2" />
                Перейти в каталог
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2 hover:border-primary transition-all">
                <Icon name="Sparkles" size={20} className="mr-2" />
                Новинки
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-16 px-4 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наш каталог</h2>
            <p className="text-gray-600 text-lg">Выберите идеальную лампу для вашего интерьера</p>
          </div>

          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full px-6 py-5 text-base font-semibold transition-all ${
                  selectedCategory === category 
                    ? 'shadow-lg scale-105' 
                    : 'hover:scale-105 hover:shadow-md'
                }`}
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <Card 
                key={product.id} 
                className="group overflow-hidden border-2 hover:border-primary transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 animate-scale-in cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {product.badge && (
                      <Badge className="absolute top-4 right-4 text-sm px-3 py-1 shadow-lg bg-gradient-to-r from-secondary to-accent">
                        {product.badge}
                      </Badge>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                    <div className="flex items-baseline gap-3 mb-4">
                      <span className="text-3xl font-bold text-primary">
                        {product.price.toLocaleString('ru-RU')} ₽
                      </span>
                      {product.oldPrice && (
                        <span className="text-lg text-gray-400 line-through">
                          {product.oldPrice.toLocaleString('ru-RU')} ₽
                        </span>
                      )}
                    </div>
                    <Button className="w-full gap-2 py-6 text-base font-semibold shadow-md hover:shadow-lg transition-all group-hover:scale-105">
                      <Icon name="ShoppingCart" size={18} />
                      В корзину
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Icon name="Truck" size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Быстрая доставка</h3>
              <p className="text-gray-600">Доставим ваш заказ в течение 1-3 дней</p>
            </div>
            
            <div className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-secondary to-primary flex items-center justify-center">
                <Icon name="Award" size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Гарантия качества</h3>
              <p className="text-gray-600">2 года гарантии на все товары</p>
            </div>
            
            <div className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-accent to-secondary flex items-center justify-center">
                <Icon name="Headphones" size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Поддержка 24/7</h3>
              <p className="text-gray-600">Всегда готовы помочь вам</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Icon name="Lightbulb" size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold">LightShop</h3>
              </div>
              <p className="text-gray-400">Освещение премиум качества для вашего дома</p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Каталог</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Современные</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Классические</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Лофт</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Минимализм</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Информация</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Доставка</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Оплата</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Гарантия</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (999) 123-45-67</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <span>info@lightshop.ru</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 LightShop. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

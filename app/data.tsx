import Telegram from './components/social-icons/telegram';
import WhatsApp from './components/social-icons/whatsapp';
import VKontakte from './components/social-icons/vkontakte';
import Facebook from './components/social-icons/facebook';

export const menu = [
  {id: 1, link: '', text: 'О нас'},
  {id: 2, link: '', text: 'Услуги'},
  {id: 3, link: '', text: 'Отзывы'},
  {id: 4, link: '', text: 'Контакты'}
]

export const socials = [
  {
    id: 1,
    link: 'Telegram',
    icon: <Telegram/>
  },
  {
    id: 2,
    link: 'WhatsApp',
    icon: <WhatsApp/>
  },
  {
    id: 3,
    link: 'ВКонтакте',
    icon: <VKontakte/>
  },
  {
    id: 4,
    link: 'Facebook',
    icon: <Facebook/>
  }
];

export const services = [
  { id: 1, link: '', text: 'Репетитор по программированию' },
  { id: 2, link: '', text: 'Ментор по программированию' },
  { id: 3, link: '', text: 'Создание веб-проекта для студентов' },
  { id: 4, link: '', text: 'Создание веб-проекта для учеников' },
  { id: 5, link: '', text: 'Создание веб-проекта с нуля' }
];
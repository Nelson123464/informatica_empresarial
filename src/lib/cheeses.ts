import paria from '@/assets/paria.jpg';
import gourmet from '@/assets/gourmet.jpg';
import azul from '@/assets/azul.jpg';
export const cheeses = [
 { id: 'paria', name: 'Queso Paria', tag: 'EL CLÁSICO ANDINO', taste: 'Firme y lleno de carácter', description: 'Pasta prensada, sabor profundo y una corteza cuidada a mano. La tradición del altiplano en cada cuña.', image: paria, maturation: '4 a 8 meses', price: 67.5, pairing: 'Papas andinas, pan de campo y vino tinto.', category: 'Tradicional' },
 { id: 'gourmet', name: 'Paria Gourmet', tag: 'SUAVIDAD QUE ENAMORA', taste: 'Suave y cremoso', description: 'Pasta blanda y corteza florida. Una textura delicada para disfrutar sin prisa y compartir en tu mesa.', image: gourmet, maturation: 'Maduración corta', price: null, pairing: 'Nueces, uvas frescas y un vino blanco.', category: 'Suave' },
 { id: 'azul', name: 'Queso Azul de Altura', tag: 'PARA PALADARES CURIOSOS', taste: 'Intenso y ligeramente picante', description: 'Vetas de moho noble, una pasta semiblanda y un carácter inolvidable. Madurado en una cava independiente.', image: azul, maturation: '2 a 3 meses', price: 85, pairing: 'Peras, miel, nueces y un vino dulce.', category: 'Intenso' },
];
export const whatsappNumber = '51997988594';
export function enquiryUrl(message: string) { return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`; }
export function formatPrice(value: number) { return `S/ ${value.toFixed(2).replace('.', ',')}`; }

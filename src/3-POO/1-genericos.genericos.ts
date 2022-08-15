
import { Dog } from './2-Avanzado/5-abstracto.avanzada';

function getValue<T>(value: T) {
  const array: T[] = [value];
  return value;
}

// getValue<number>(12).toFixed();
// getValue<string>('12').toLowerCase();
// getValue<number[]>([11,1,1]).forEach;
const fifi = new Dog('fifi', 'nico');
// getValue<Dog>(fifi).greeting
// 111
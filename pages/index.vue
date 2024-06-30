<template>
  <div class="card">
    <PrimeDataView :value="products" :layout="layout">


      <template #list="slotProps">
        <div class="flex flex-col">
          <div v-for="(item, index) in slotProps.items" :key="index">
          <div class="flex flex-row sm:flex-row sm:items-center p-6 gap-4" :class="{ 'border-t border-surface-200 dark:border-surface-700': index !== 0 }">
            <div class=" w-1/3 md:w-1/3 relative">
              <img class="block xl:block mx-auto rounded w-full" :src="'assets/images/maxPain.jpg'" :alt="item.name" />
              <PrimeTag :value="item.inventoryStatus"  class="absolute dark:!bg-surface-900" style="left: 4px; top: 4px"></PrimeTag>
            </div>
            <div class="flex flex-col md:flex-row justify-between md:items-center flex-1 gap-6">
              <div class="flex flex-row md:flex-col justify-between items-start gap-2">
                <div>
                  <span class="font-medium text-surface-500 dark:text-surface-400 text-sm">{{ item.category }}</span>
                  <div class="text-lg font-medium mt-2">{{ item.name }}</div>
                </div>
                <div class="bg-surface-100 p-1" style="border-radius: 30px">
                  <div class="bg-surface-0 flex items-center gap-2 justify-center py-1 px-2" style="border-radius: 30px; box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)">
                    <span class="text-surface-900 font-medium text-sm">{{ item.rating }}</span>
                    <i class="pi pi-star-fill text-yellow-500"></i>
                  </div>
                </div>
              </div>
              <div class="flex flex-col md:items-end gap-8">
                <span class="text-xl font-semibold"> от {{ item.price[0] }} ₽</span>
                <div class="flex flex-row-reverse md:flex-row gap-2">
                  <PrimeButton icon="pi pi-heart" outlined></PrimeButton>
                  <PrimeButton icon="pi pi-shopping-cart" label="Buy Now" :disabled="item.inventoryStatus === 'OUTOFSTOCK'" class="flex-auto md:flex-initial whitespace-nowrap"></PrimeButton>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        </template>

<template #grid="slotProps">
  <div class="grid grid-cols-12 gap-4">
    <div v-for="(item, index) in slotProps.items" :key="index" class="col-span-12 sm:col-span-6 md:col-span-4 xl:col-span-6 p-2">
      <div class="p-6 border border-surface-200 dark:border-surface-700 bg-surface-0 dark:bg-surface-900 rounded flex flex-col">
        <div class="bg-surface-50 flex justify-center rounded p-4">
          <div class="relative mx-auto">
            <img class="rounded w-full" :src="'assets/images/maxPain.jpg'" :alt="item.name" style="max-width: 300px"/>
            <PrimeTag :value="item.inventoryStatus"  class="absolute dark:!bg-surface-900" style="left: 4px; top: 4px"></PrimeTag>
          </div>
        </div>
        <div class="pt-6">
          <div class="flex flex-row justify-between items-start gap-2">
            <div>
              <span class="font-medium text-surface-500 dark:text-surface-400 text-sm">{{ item.category }}</span>
              <div class="text-lg font-medium mt-1 min-h-20">{{ item.name }}</div>
            </div>
            <div class="bg-surface-100 p-1" style="border-radius: 30px">
              <div class="bg-surface-0 flex items-center gap-2 justify-center py-1 px-2" style="border-radius: 30px; box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)">
                <span class="text-surface-900 font-medium text-sm">{{ item.rating }}</span>
                <i class="pi pi-star-fill text-yellow-500"></i>
              </div>
            </div>
          </div>
          <div class="flex flex-col gap-6 mt-6">
            <span class="text-2xl font-semibold">от {{ item.price[0] }} ₽</span>
            <div class="flex gap-2">
              <PrimeButton icon="pi pi-shopping-cart" label="Buy Now" :disabled="item.inventoryStatus === 'OUTOFSTOCK'" class="flex-auto whitespace-nowrap"></PrimeButton>
              <PrimeButton icon="pi pi-heart" outlined></PrimeButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
</PrimeDataView>
</div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";


const products = ref();
const layout = computed(()=>width.value>728? 'grid':'list')
const options = ref(['list', 'grid']);
const { width, height } = useWindowSize()
products.value = [
  {
    id: 0,
    name: 'XXXX-самая острая пицца в городе',
    description:
        'Сливочный соус, моцарелла, соус на основе острых перцев Каролина Рипер, Тринидадский Скорпион и Призрак, чеснок, начос, курица и манго',
    size: [25],
    price: [745],
    tag: ['Все', 'Острые', 'Грибные'],
    img: 'extra-hot',
  },
  {
    id: 1,
    name: 'Пепперони',
    description:
        'Томатный соус, много моцареллы и действительно много пепперони',
    size: [25, 30, 35],
    price: [420, 635, 785],
    tag: ['Все', 'Острые', "моцарелловое безумие"],
    img: 'pepperoni',
  },
  {
    id: 2,
    name: 'Макс Пейн',
    description:
        'Наше фирменное тесто, томатный соус, сыр моцарелла, репчатый лук, пепперони, красный халопеньо и бургер соус',
    size: [25, 30, 35],
    price: [485, 735, 925],
    tag: ['Все', 'Острые'],
    img: 'max-pain',
  },
  {
    id: 3,
    name: 'Сыр и ветчина',
    description: 'Сливочный соус, сыр моцарелла,  нежная ветчина',
    size: [25, 30, 35],
    price: [435, 615, 775],
    tag: ['Все', 'Детям'],
    img: 'chees-ham',
  },
  {
    id: 4,
    name: 'Мясная',
    description:
        'Наше фирменное тесто,томатный соус,сыр моцарелла, нежное куриное филе,пряные пепперони,охотничьи колбаски и сочный бекон',
    size: [25, 30, 35],
    price: [485, 735, 935],
    tag: ['Все', 'Острые'],
    img: 'meaty',
  },
  {
    id: 5,
    name: 'Деревенская',
    description:
        'Нежный сливочный соус, сыр моцарелла, ветчина, свежие обжаренные шампиньоны, сочный бекон и ароматный зелёный лук',
    size: [25, 30, 35],
    price: [485, 725, 895],
    tag: ['Все'],
    img: 'villager',
  },
  {
    id: 6,
    name: 'Курица с грибами',
    description:
        'Нежный сливочный соус, сыр моцарелла нежное куриное филе, спелые томаты, свежие обжаренные шампиньоны',
    size: [25, 30, 35],
    price: [475, 715, 895],
    tag: ['Все', 'Грибные'],
    img: 'chicken-mushrooms',
  },
  {
    id: 7,
    name: 'Ветчина, грибы под чесночным соусом',
    description:
        'Нежный сливочный соус, сыр моцарелла нежное куриное филе, спелые томаты, свежие обжаренные шампиньоны',
    size: [25, 30, 35],
    price: [465, 695, 875],
    tag: ['Все', 'Грибные', 'Ветчинка'],
    img: 'bacon-mushrooms',
  },
  {
    id: 8,
    name: 'Русская',
    description:
        'Сливочный соус, сыр моцарелла, нежная ветчина, маринованные корнишоны, зеленый лук и укроп',
    size: [25, 30, 35],
    price: [485, 715, 895],
    tag: ['Все'],
    img: 'russian',
  },
  {
    id: 9,
    name: 'Острая Мексика',
    description:
        'Томатный соус, сыр моцарелла, нежное куриное филе, свежие обжаренные шампиньоны, халапеньо. Для тех кто любит совсем горячо мы добавим Tabassco скажите об этом при заказе)',
    size: [25, 30, 35],
    price: [485, 715, 885],
    tag: ['Все', 'Острые', 'Грибные'],
    img: 'chilly-mexico',
  },
  {
    id: 10,
    name: 'Испания',
    description:
        'Традиционное тесто, томатный соус,сыр моцарелла, пряные колбаски чоризо, томаты черри, сыр Дор Блю',
    size: [25, 30, 35],
    price: [485, 695, 885],
    tag: ['Все', 'Острые'],
    img: 'spain',
  },
  {
    id: 11,
    name: 'Карбонара',
    description:
        'Нежный сливочный соус, сыр моцарелла, хрустящий бекон, томаты черри, соус карбонара, прованские травы',
    size: [25, 30, 35],
    price: [465, 695, 855],
    tag: ['Все'],
    img: 'carbonara',
  },
  {
    id: 12,
    name: 'BBQ',
    description:
        'Томатный соус, сыр моцарелла, нежное куриное филе, пепперони, хрустящий бекон, соус BBQ, укроп - по желанию',
    size: [25, 30, 35],
    price: [485, 735, 935],
    tag: ['Все', 'Острые'],
    img: 'bbq',
  },
  {
    id: 13,
    name: '4 сыра',
    description:
        'Традиционное тесто, сливочный соус, сыр моцарелла, пармезан, дор блю, чеддер.',
    size: [25, 30, 35],
    price: [475, 715, 915],
    tag: ['Все'],
    img: 'four-chees',
  },
  {
    id: 14,
    name: 'Курица под соусом',
    description:
        'Традиционное тесто, сливочный соус, моцарелла, филе цыплёнка, кисло сладкий соус',
    size: [25, 30, 35],
    price: [395, 625, 755],
    tag: ['Все'],
    img: 'chicken-souce',
  },
  {
    id: 15,
    name: 'Гавайская',
    description:
        'Сливочный соус, нежное куриное филе, ананасы, сыр моцарелла',
    size: [25, 30, 35],
    price: [435, 625, 765],
    tag: ['Все'],
    img: 'hawaian',
  },
  {
    id: 16,
    name: 'Маргарита',
    description:
        'Традиционное тесто, томатный соус из протертых помидоров и сочные спелые томаты',
    size: [25, 30, 35],
    price: [430, 625, 785],
    tag: ['Все'],
    img: 'margarita',
  },
  {
    id: 17,
    name: 'Легенда 17,1',
    description:
        'Сливочный соус, нежная ветчина, сыр моцарелла, пепперони, свежие шампиньоны, хрустящий бекон, маринованный репчатый лук и зелёный лук',
    size: [25, 30, 35],
    price: [495, 735, 945],
    tag: ['Все', 'Острые'],
    img: 'legend',
  },
  {
    id: 18,
    name: 'Пицца от Шефа',
    description:
        'Томатный соус, сыр моцарелла, сочный бекон, нежное куриное филе, свежие обжаренные шампиньоны, оливки, укроп',
    size: [25, 30, 35],
    price: [485, 735, 935],
    tag: ['Все'],
    img: 'chiefs',
  },
  {
    id: 19,
    name: 'Креветки с Халопеньо',
    description:
        'Сливочный соус, сыр моцарелла, спелые томаты, королевские креветки, халапеньо и кунжут',
    size: [25, 30, 35],
    price: [475, 725, 935],
    tag: ['Все', 'Острые'],
    img: 'chilly-shrimps',
  },
  {
    id: 20,
    name: 'Креветки с соусом Том Ям',
    description:
        'Сливочный соус, сыр моцарелла, спелые томаты, королевские креветки сочные ананасы и тайский соус Том Ям',
    size: [25, 30, 35],
    price: [485, 735, 935],
    tag: ['Все', 'Острые'],
    img: 'tom-yam-shrimps',
  },
  {
    id: 21,
    name: 'Креветочное безумие',
    description:
        'Сливочный соус, сыр моцарелла, королевские креветки и сочные ананасы',
    size: [25, 30, 35],
    price: [465, 715, 835],
    tag: ['Все'],
    img: 'shrimps-mad',
  },
  {
    id: 22,
    name: 'Цезарь с креветками',
    description:
        'Нежный сливочный соус, сыр моцарелла, сладкие томаты Черри, королевские креветки, сыр пармезан, свежий салат Айсберг и соус Цезарь',
    size: [25, 30, 35],
    price: [515, 745, 935],
    tag: ['Все'],
    img: 'ceasar-shrimps',
  },
  {
    id: 23,
    name: 'Цезарь классический',
    description:
        'Нежный сливочный соус, сыр моцарелла, сладкие томаты Черри, нежная курочка в сливочном соусе, сыр пармезан, салат айсберг и классический соус "цезарь"',
    size: [25, 30, 35],
    price: [475, 715, 895],
    tag: ['Все'],
    img: 'ceasar',
  },
  {
    id: 24,
    name: 'Сыр Мёд и Орехи',
    description:
        'Традиционное тесто, сливочный соус, сыр моцарелла, пармезан, дор блю. Сладкий цветочный мёд и грецкие орехи        Удивительное сочетание которое стоит попробовать',
    size: [25, 30, 35],
    price: [475, 715, 895],
    tag: ['Все'],
    img: 'chees-honey-nuts',
  },
];
</script>

<style lang="scss" scoped>

</style>
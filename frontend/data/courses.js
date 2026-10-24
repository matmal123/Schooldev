// src/data/courses.js
// Единый источник данных о курсах — используется Dashboard, CoursePage, RoadmapPage.

import robloxIcon from '@public/roblox-logo.png';
import unityIcon from '@public/unity-logo.png';
import pythonIcon from '@public/python-logo.png';
import htmlIcon from '@public/html-logo.png';
import godotIcon from '@public/godot-logo.svg';
import gitIcon from '@public/git-logo.svg';

export const courses = [
  {
    id: 1,
    title: 'Roblox Studio',
    image: robloxIcon,
    level: 'Начинающий',
    description: 'Изучите создание игр и 3D-миров в Roblox Studio с помощью языка Lua.',
    fullDescription:
      'Полный курс по Roblox Studio: от первого скрипта на Lua до публикации собственной игры. Научитесь создавать 3D-миры, работать с физикой, UI и монетизацией.',
    lessons: [
      'Введение в Roblox Studio',
      'Основы Lua',
      'Работа с частями и террейном',
      'Скрипты и события',
      'GUI и интерфейсы',
      'Физика и коллизии',
      'Публикация игры',
    ],
  },
  {
    id: 2,
    title: 'Unity',
    image: unityIcon,
    level: 'Средний',
    description: 'Освойте разработку 2D и 3D игр в Unity с использованием C#.',
    fullDescription:
      'Курс по Unity для тех, кто хочет создавать игры профессионально. C#, физика, анимации, UI, работа со сценами и сборка проекта под разные платформы.',
    lessons: [
      'Введение в Unity и C#',
      'Сцены и GameObjects',
      'Компоненты и скрипты',
      'Физика и Rigidbody',
      'Анимации',
      'UI и Canvas',
      'Сборка проекта',
    ],
  },
  {
    id: 3,
    title: 'Python',
    image: pythonIcon,
    level: 'Средний',
    description: 'Изучите основы программирования на Python: синтаксис, функции и работу с данными.',
    fullDescription:
      'Практический курс по Python с нуля: синтаксис, структуры данных, ООП, работа с файлами и создание приложений.',
    lessons: [
      'Введение в Python',
      'Переменные и типы',
      'Условия и циклы',
      'Функции',
      'Списки и словари',
      'ООП',
      'Работа с файлами',
      'Практический проект',
    ],
  },
  {
    id: 4,
    title: 'Создание сайтов',
    image: htmlIcon,
    level: 'Начинающий',
    description: 'Научитесь создавать современные сайты с нуля, используя HTML, CSS и JavaScript.',
    fullDescription:
      'Практический курс по созданию сайтов с нуля: HTML, CSS, адаптивность, JavaScript и публикация проекта.',
    lessons: [
      'Основы HTML',
      'CSS: селекторы и свойства',
      'Flexbox и Grid',
      'Адаптивность',
      'JavaScript на сайте',
      'Практический проект',
    ],
  },
  {
    id: 5,
    title: 'Godot',
    image: godotIcon,
    level: 'Продвинутый',
    description: 'Освойте создание игр в Godot с помощью GDScript и встроенных инструментов.',
    fullDescription:
      'Курс по Godot Engine: GDScript, сцены, ноды, физика, анимации и экспорт игры под разные платформы.',
    lessons: [
      'Введение в Godot',
      'Сцены и ноды',
      'GDScript',
      'Физика и коллизии',
      'Анимации',
      'UI',
      'Экспорт проекта',
    ],
  },
  {
    id: 6,
    title: 'GitHub',
    image: gitIcon,
    level: 'Средний',
    description: 'Изучите систему контроля версий Git и платформу GitHub для совместной разработки.',
    fullDescription:
      'Курс по Git и GitHub: коммиты, ветки, слияния, pull request, работа в команде и CI/CD.',
    lessons: [
      'Введение в Git',
      'Коммиты и история',
      'Ветки и слияния',
      'Удалённые репозитории',
      'Pull Request',
      'Работа в команде',
      'GitHub Actions',
    ],
  },
];

// Roadmap-данные для каждого курса
const roadmaps = {
  1: {
    title: '🎮 Roblox Roadmap',
    description: 'Путь от новичка до профи · главы с подтемами и ответвлениями',
    chapters: [
      {
        id: 1,
        number: 'Глава 1',
        title: 'Основы Roblox Studio',
        description: 'Интерфейс, части, свойства и первые шаги в редакторе.',
        subsections: ['🖥️ Интерфейс', '📦 Части (Parts)', '🎨 Свойства', '🌍 Terrain'],
        branches: [
          { name: 'Плагины', desc: 'Полезные плагины Studio' },
          { name: 'Hotkeys', desc: 'Горячие клавиши для скорости' },
        ],
      },
      {
        id: 2,
        number: 'Глава 2',
        title: 'Язык Lua',
        description: 'Переменные, функции, таблицы — база скриптинга.',
        subsections: ['📦 Переменные', '🔁 Циклы', '🎯 Функции', '📚 Таблицы'],
        branches: [
          { name: 'Метатаблицы', desc: 'Продвинутая магия Lua' },
          { name: 'Модули', desc: 'ModuleScript' },
        ],
      },
      {
        id: 3,
        number: 'Глава 3',
        title: 'Скрипты и события',
        description: 'ServerScript, LocalScript, RemoteEvents — связь клиента и сервера.',
        subsections: ['⚡ ServerScript', '🖱️ LocalScript', '🔗 RemoteEvents', '🛡️ Безопасность'],
        branches: [
          { name: 'CollectionService', desc: 'Управление тегами' },
          { name: 'DataStore', desc: 'Сохранение данных' },
        ],
      },
      {
        id: 4,
        number: 'Глава 4',
        title: 'GUI и интерфейсы',
        description: 'ScreenGui, Frame, TextButton — создаём UI для игры.',
        subsections: ['🖼️ ScreenGui', '📐 Frame', '🔘 TextButton', '🎨 UIGradient'],
        branches: [
          { name: 'Анимации UI', desc: 'TweenService' },
          { name: 'Адаптивный UI', desc: 'UIScale и Anchors' },
        ],
      },
      {
        id: 5,
        number: 'Глава 5',
        title: 'Публикация и монетизация',
        description: 'Game Passes, Dev Products, публикация в Roblox.',
        subsections: ['🚀 Публикация', '💰 Game Passes', '🛒 Dev Products', '📊 Аналитика'],
        branches: [
          { name: 'Premium Payouts', desc: 'Доход от Premium' },
          { name: 'Sponsored', desc: 'Продвижение игры' },
        ],
      },
    ],
  },
  2: {
    title: '🎮 Unity Roadmap',
    description: 'Путь от новичка до профи · главы с подтемами и ответвлениями',
    chapters: [
      {
        id: 1,
        number: 'Глава 1',
        title: 'Введение в Unity',
        description: 'Установка, интерфейс, первые сцены.',
        subsections: ['🖥️ Интерфейс', '📦 GameObjects', '🎨 Materials', '🌍 Scenes'],
        branches: [
          { name: 'Package Manager', desc: 'Управление пакетами' },
          { name: 'Assets Store', desc: 'Готовые ассеты' },
        ],
      },
      {
        id: 2,
        number: 'Глава 2',
        title: 'C# для Unity',
        description: 'Скрипты, MonoBehaviour, жизненный цикл.',
        subsections: ['📦 Переменные', '🎯 MonoBehaviour', '🔁 Start / Update', '📚 Классы'],
        branches: [
          { name: 'Coroutines', desc: 'Асинхронность в Unity' },
          { name: 'ScriptableObject', desc: 'Данные как ассеты' },
        ],
      },
      {
        id: 3,
        number: 'Глава 3',
        title: 'Физика и коллизии',
        description: 'Rigidbody, Colliders, триггеры.',
        subsections: ['⚙️ Rigidbody', '📦 Colliders', '🔔 Triggers', '💥 Physics Material'],
        branches: [
          { name: 'Raycast', desc: 'Лучи для взаимодействия' },
          { name: 'Joint', desc: 'Соединения объектов' },
        ],
      },
      {
        id: 4,
        number: 'Глава 4',
        title: 'Анимации',
        description: 'Animator, Blend Trees, события анимации.',
        subsections: ['🎬 Animator', '🌳 Blend Trees', '🔔 Animation Events', '🎭 Mecanim'],
        branches: [
          { name: 'Timeline', desc: 'Кинематографичные сцены' },
          { name: 'IK', desc: 'Инверсная кинематика' },
        ],
      },
      {
        id: 5,
        number: 'Глава 5',
        title: 'Сборка проекта',
        description: 'Build Settings, платформы, оптимизация.',
        subsections: ['🚀 Build Settings', '📱 Платформы', '⚡ Оптимизация', '📦 Asset Bundles'],
        branches: [
          { name: 'IL2CPP', desc: 'Ускорение сборки' },
          { name: 'Addressables', desc: 'Управление контентом' },
        ],
      },
    ],
  },
  3: {
    title: '🐍 Python Roadmap',
    description: 'Путь от новичка до Python-профи · главы с подтемами и ответвлениями',
    chapters: [
      {
        id: 1,
        number: 'Глава 1',
        title: 'Основы Python',
        description: 'Переменные, типы данных, функции, область видимости — база языка.',
        subsections: ['📦 Переменные и типы', '🔁 Циклы и условия', '🎯 Функции', '📚 Списки и словари'],
        branches: [
          { name: 'Виртуальное окружение', desc: 'venv и управление зависимостями' },
          { name: 'Замыкания', desc: 'Функции внутри функций' },
        ],
      },
      {
        id: 2,
        number: 'Глава 2',
        title: 'Работа с данными',
        description: 'Файлы, JSON, регулярные выражения — учимся обрабатывать данные.',
        subsections: ['📂 Работа с файлами', '🗂️ JSON и CSV', '🔍 Регулярные выражения', '🧮 Модуль collections'],
        branches: [
          { name: 'Pandas', desc: 'Анализ табличных данных' },
          { name: 'NumPy', desc: 'Работа с массивами' },
        ],
      },
      {
        id: 3,
        number: 'Глава 3',
        title: 'Работа с API',
        description: 'requests, обработка ошибок, работа с REST API.',
        subsections: ['🌐 requests', '📡 HTTP методы', '🔄 Парсинг ответов', '🎯 Обработка ошибок'],
        branches: [
          { name: 'WebSocket', desc: 'Двусторонняя связь' },
          { name: 'FastAPI', desc: 'Создание собственного API' },
        ],
      },
      {
        id: 4,
        number: 'Глава 4',
        title: 'ООП в Python',
        description: 'Классы, наследование, инкапсуляция, магические методы.',
        subsections: ['🧬 Наследование', '🏗️ Классы и объекты', '🔒 Приватные поля', '🎨 Полиморфизм'],
        branches: [
          { name: 'Миксины', desc: 'Примеси в классах' },
          { name: 'Декораторы', desc: 'Модификация функций и классов' },
        ],
      },
      {
        id: 5,
        number: 'Глава 5',
        title: 'Модули и пакеты',
        description: 'import, pip, структура проекта, публикация пакетов.',
        subsections: ['📦 import/from', '🔧 pip и зависимости', '⚡ Структура проекта', '🎯 Создание пакетов'],
        branches: [
          { name: 'Poetry', desc: 'Управление зависимостями' },
          { name: 'PyInstaller', desc: 'Сборка в exe' },
        ],
      },
    ],
  },
  4: {
    title: '📄 Создание сайтов Roadmap',
    description: 'Путь от новичка до профи по созданию сайтов · главы с подтемами и ответвлениями',
    chapters: [
      {
        id: 1,
        number: 'Глава 1',
        title: 'Основы HTML',
        description: 'Теги, структура документа.',
        subsections: ['📦 Основные теги', '🔁 Списки и таблицы', '🎯 Формы'],
        branches: [
          { name: 'HTML5 API', desc: 'Новые возможности HTML5' },
          { name: 'Мета-теги', desc: 'SEO и соцсети' },
        ],
      },
      {
        id: 2,
        number: 'Глава 2',
        title: 'CSS',
        description: 'Селекторы, Flexbox, Grid — учимся стилизовать.',
        subsections: ['🎨 Селекторы и свойства', '🧩 Flexbox', '🔲 CSS Grid'],
        branches: [
          { name: 'Анимации', desc: 'Transition и keyframes' },
          { name: 'Препроцессоры', desc: 'Sass и SCSS' },
        ],
      },
      {
        id: 3,
        number: 'Глава 3',
        title: 'Адаптивность',
        description: 'Media queries, mobile-first, отзывчивые изображения.',
        subsections: ['📱 Media queries', '🌐 Mobile-first', '🖼️ Отзывчивые изображения', '🎯 Viewport'],
        branches: [
          { name: 'Container queries', desc: 'Адаптивность по контейнеру' },
          { name: 'CSS clamp()', desc: 'Плавная типографика' },
        ],
      },
      {
        id: 4,
        number: 'Глава 4',
        title: 'JavaScript на сайте',
        description: 'DOM, события, интерактивность, работа с формами.',
        subsections: ['🧬 DOM-дерево', '🖱️ События', '🔒 Работа с формами', '🎨 Динамические стили'],
        branches: [
          { name: 'LocalStorage', desc: 'Хранение данных в браузере' },
          { name: 'Fetch API', desc: 'Загрузка данных без перезагрузки' },
        ],
      },
      {
        id: 5,
        number: 'Глава 5',
        title: 'Сборка и деплой',
        description: 'Vite, сборка проекта, публикация на хостинге.',
        subsections: ['📦 Vite', '🔧 Сборка', '🚀 Публикация', '🌐 Домен'],
        branches: [
          { name: 'Netlify / Vercel', desc: 'Хостинг для статики' },
          { name: 'GitHub Pages', desc: 'Бесплатный хостинг' },
        ],
      },
    ],
  },
  5: {
    title: '🎮 Godot Roadmap',
    description: 'Путь от новичка до Godot-профи · главы с подтемами и ответвлениями',
    chapters: [
      {
        id: 1,
        number: 'Глава 1',
        title: 'Введение в Godot',
        description: 'Установка, интерфейс, первые сцены.',
        subsections: ['🖥️ Интерфейс', '📦 Ноды', '🌍 Сцены', '🎨 Ресурсы'],
        branches: [
          { name: 'GDScript vs C#', desc: 'Что выбрать' },
          { name: 'Плагины', desc: 'Расширения редактора' },
        ],
      },
      {
        id: 2,
        number: 'Глава 2',
        title: 'GDScript',
        description: 'Переменные, функции, сигналы.',
        subsections: ['📦 Переменные', '🎯 Функции', '📡 Сигналы', '📚 Массивы'],
        branches: [
          { name: 'Корутины', desc: 'await и yield' },
          { name: 'Экспорт переменных', desc: '@export' },
        ],
      },
      {
        id: 3,
        number: 'Глава 3',
        title: 'Физика и коллизии',
        description: 'RigidBody, CharacterBody, Area.',
        subsections: ['⚙️ RigidBody', '🏃 CharacterBody', '🔔 Area', '💥 Collision Shapes'],
        branches: [
          { name: 'RayCast', desc: 'Лучи' },
          { name: 'Physics Layers', desc: 'Слои коллизий' },
        ],
      },
      {
        id: 4,
        number: 'Глава 4',
        title: 'Анимации',
        description: 'AnimationPlayer, AnimationTree.',
        subsections: ['🎬 AnimationPlayer', '🌳 AnimationTree', '🔔 События', '🎭 State Machine'],
        branches: [
          { name: 'Skeleton2D', desc: '2D-скелеты' },
          { name: 'IK', desc: 'Инверсная кинематика' },
        ],
      },
      {
        id: 5,
        number: 'Глава 5',
        title: 'Экспорт проекта',
        description: 'Экспорт под Windows, Linux, Web.',
        subsections: ['🚀 Export Templates', '📱 Платформы', '⚡ Оптимизация', '🌐 Web-экспорт'],
        branches: [
          { name: 'Android', desc: 'Экспорт на мобильные' },
          { name: 'Steam', desc: 'Публикация в Steam' },
        ],
      },
    ],
  },
  6: {
    title: '🔧 GitHub Roadmap',
    description: 'Путь от новичка до Git-профи · главы с подтемами и ответвлениями',
    chapters: [
      {
        id: 1,
        number: 'Глава 1',
        title: 'Введение в Git',
        description: 'Установка, настройка, первый репозиторий.',
        subsections: ['🖥️ Установка', '⚙️ git config', '📦 git init', '📝 Первый коммит'],
        branches: [
          { name: 'GUI-клиенты', desc: 'GitHub Desktop, Fork' },
          { name: 'SSH-ключи', desc: 'Безопасное подключение' },
        ],
      },
      {
        id: 2,
        number: 'Глава 2',
        title: 'Коммиты и история',
        description: 'git add, commit, log, diff.',
        subsections: ['📦 git add', '📝 git commit', '📜 git log', '🔍 git diff'],
        branches: [
          { name: 'git rebase', desc: 'Переписывание истории' },
          { name: 'git cherry-pick', desc: 'Выборочные коммиты' },
        ],
      },
      {
        id: 3,
        number: 'Глава 3',
        title: 'Ветки и слияния',
        description: 'branch, checkout, merge, конфликты.',
        subsections: ['🌿 git branch', '🔀 git merge', '⚠️ Конфликты', '🧹 Удаление веток'],
        branches: [
          { name: 'Git Flow', desc: 'Стратегия ветвления' },
          { name: 'Trunk-based', desc: 'Альтернативная стратегия' },
        ],
      },
      {
        id: 4,
        number: 'Глава 4',
        title: 'Удалённые репозитории',
        description: 'remote, push, pull, fetch.',
        subsections: ['🌐 git remote', '⬆️ git push', '⬇️ git pull', '🔄 git fetch'],
        branches: [
          { name: 'Fork', desc: 'Форк чужого репозитория' },
          { name: 'Upstream', desc: 'Синхронизация с оригиналом' },
        ],
      },
      {
        id: 5,
        number: 'Глава 5',
        title: 'Командная работа',
        description: 'Pull Request, Code Review, GitHub Actions.',
        subsections: ['📤 Pull Request', '👀 Code Review', '⚙️ GitHub Actions', '📊 Issues'],
        branches: [
          { name: 'CI/CD', desc: 'Автоматизация' },
          { name: 'Protected Branches', desc: 'Защита веток' },
        ],
      },
    ],
  },
};

export const getCourse = (id) => courses.find(c => c.id === Number(id));
export const getRoadmap = (id) => roadmaps[Number(id)];
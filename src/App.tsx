import { Fragment, useEffect, useRef, useState, type ReactNode } from "react";

type IconName =
  | "home"
  | "calendar"
  | "wallet"
  | "sparkle"
  | "check"
  | "grid"
  | "settings"
  | "bell"
  | "search"
  | "plus"
  | "arrow"
  | "plane"
  | "hotel"
  | "train"
  | "more"
  | "briefcase"
  | "shopping"
  | "coffee"
  | "close"
  | "chevron"
  | "sun"
  | "mic"
  | "play"
  | "pause"
  | "stop"
  | "clip"
  | "file"
  | "bike"
  | "clock"
  | "panel"
  | "user"
  | "help"
  | "logout"
  | "terminal"
  | "server"
  | "copy"
  | "link"
  | "camera"
  | "car";

const paths: Record<IconName, ReactNode> = {
  home: (
    <>
      <path d="M3 11.5 12 4l9 7.5" />
      <path d="M5.5 10v10h13V10M9 20v-6h6v6" />
    </>
  ),
  calendar: (
    <>
      <rect x="3.5" y="5" width="17" height="15" rx="3" />
      <path d="M8 3v4m8-4v4M3.5 10h17" />
    </>
  ),
  wallet: (
    <>
      <path d="M4 6.5h13a3 3 0 0 1 3 3v9H5a2 2 0 0 1-2-2v-11a2 2 0 0 1 2-2h12" />
      <path d="M16 12h4" />
    </>
  ),
  sparkle: (
    <>
      <path d="m12 2 1.3 5.2L18 9l-4.7 1.8L12 16l-1.3-5.2L6 9l4.7-1.8L12 2Z" />
      <path d="m19 15 .7 2.3L22 18l-2.3.7L19 21l-.7-2.3L16 18l2.3-.7L19 15Z" />
    </>
  ),
  check: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m8 12 2.5 2.5L16 9" />
    </>
  ),
  grid: (
    <>
      <rect x="3.5" y="3.5" width="7" height="7" rx="2" />
      <rect x="13.5" y="3.5" width="7" height="7" rx="2" />
      <rect x="3.5" y="13.5" width="7" height="7" rx="2" />
      <rect x="13.5" y="13.5" width="7" height="7" rx="2" />
    </>
  ),
  settings: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.6 1.6 0 0 0 .3 1.8l.1.1-2.8 2.8-.1-.1a1.6 1.6 0 0 0-1.8-.3 1.6 1.6 0 0 0-1 1.5V21h-4v-.2a1.6 1.6 0 0 0-1-1.5 1.6 1.6 0 0 0-1.8.3l-.1.1-2.8-2.8.1-.1A1.6 1.6 0 0 0 4.8 15a1.6 1.6 0 0 0-1.5-1H3v-4h.3a1.6 1.6 0 0 0 1.5-1 1.6 1.6 0 0 0-.3-1.8l-.1-.1 2.8-2.8.1.1a1.6 1.6 0 0 0 1.8.3 1.6 1.6 0 0 0 1-1.5V3h4v.2a1.6 1.6 0 0 0 1 1.5 1.6 1.6 0 0 0 1.8-.3l.1-.1 2.8 2.8-.1.1a1.6 1.6 0 0 0-.3 1.8 1.6 1.6 0 0 0 1.5 1h.2v4h-.2a1.6 1.6 0 0 0-1.5 1Z" />
    </>
  ),
  bell: (
    <>
      <path d="M18 9a6 6 0 0 0-12 0c0 7-3 7-3 8.5h18C21 16 18 16 18 9Z" />
      <path d="M9.5 21h5" />
    </>
  ),
  search: (
    <>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="m16 16 5 5" />
    </>
  ),
  plus: <path d="M12 5v14M5 12h14" />,
  arrow: (
    <>
      <path d="M5 12h14M14 7l5 5-5 5" />
    </>
  ),
  plane: (
    <>
      <path d="m21 16-8-3v6l-2 1-2-8-6-3V7l7 1 3-6 2 1-1 6 7 5v2Z" />
    </>
  ),
  hotel: (
    <>
      <path d="M4 21V6a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v15M2 21h20M8 8h2m3 0h1m-6 4h2m3 0h1m-6 4h2m3 0h1" />
    </>
  ),
  train: (
    <>
      <rect x="5" y="3" width="14" height="16" rx="4" />
      <path d="M8 22l2-3m6 0 2 3M8 7h8v6H8zM8 16h.01M16 16h.01" />
    </>
  ),
  more: (
    <>
      <circle cx="5" cy="12" r="1" />
      <circle cx="12" cy="12" r="1" />
      <circle cx="19" cy="12" r="1" />
    </>
  ),
  briefcase: (
    <>
      <rect x="3" y="7" width="18" height="13" rx="3" />
      <path d="M9 7V4h6v3m-12 5h18M10 12v2h4v-2" />
    </>
  ),
  shopping: (
    <>
      <path d="M5 8h14l-1 13H6L5 8Z" />
      <path d="M9 9V6a3 3 0 0 1 6 0v3" />
    </>
  ),
  coffee: (
    <>
      <path d="M4 8h13v6a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V8Z" />
      <path d="M17 10h1a3 3 0 0 1 0 6h-2M7 3v2m4-2v2m4-2v2" />
    </>
  ),
  close: <path d="m6 6 12 12M18 6 6 18" />,
  chevron: <path d="m9 18 6-6-6-6" />,
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </>
  ),
  mic: (
    <>
      <rect x="9" y="3" width="6" height="12" rx="3" />
      <path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21M9 21h6" />
    </>
  ),
  play: <path d="m9 7 8 5-8 5V7Z" />,
  pause: (
    <>
      <path d="M9 7v10M15 7v10" />
    </>
  ),
  stop: <rect x="8" y="8" width="8" height="8" rx="1" />,
  clip: (
    <path d="m9 12.5 5.3-5.3a3 3 0 1 1 4.2 4.2l-7.2 7.2a5 5 0 0 1-7.1-7.1l7.5-7.5a2 2 0 0 1 2.8 2.8L7 14.3a1 1 0 0 0 1.4 1.4l6.5-6.5" />
  ),
  file: (
    <>
      <path d="M6 2.5h8l4 4V21H6V2.5Z" />
      <path d="M14 2.5v5h4M9 12h6M9 16h5" />
    </>
  ),
  bike: (
    <>
      <circle cx="5.5" cy="17" r="3.5" />
      <circle cx="18.5" cy="17" r="3.5" />
      <path d="m5.5 17 4-7 3.5 7h-7.5Zm7.5 0 3-9h3M9.5 10H14M8 7h3" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  panel: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="3" />
      <path d="M9 4v16M14 9l3 3-3 3" />
    </>
  ),
  user: (
    <>
      <circle cx="12" cy="8" r="3.5" />
      <path d="M5 20a7 7 0 0 1 14 0" />
    </>
  ),
  help: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M9.8 9a2.4 2.4 0 1 1 3.7 2c-1 .6-1.5 1.1-1.5 2.3M12 17h.01" />
    </>
  ),
  logout: (
    <>
      <path d="M10 4H5v16h5M14 8l4 4-4 4M8 12h10" />
    </>
  ),
  terminal: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="3" />
      <path d="m7 9 3 3-3 3M13 15h4" />
    </>
  ),
  server: (
    <>
      <rect x="3" y="4" width="18" height="6" rx="2" />
      <rect x="3" y="14" width="18" height="6" rx="2" />
      <path d="M7 7h.01M7 17h.01M11 7h6M11 17h6" />
    </>
  ),
  copy: (
    <>
      <rect x="8" y="8" width="12" height="12" rx="2" />
      <path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3" />
    </>
  ),
  link: (
    <>
      <path d="m10 13 4-4" />
      <path
        d="M7.5 16.5 5 19a3.5 3.5 0 0 1-5-5l3-3a3.5 3.5 0 0 1 5 0M16.5 7.5 19 5a3.5 3.5 0 0 1 5 5l-3 3a3.5 3.5 0 0 1-5 0"
        transform="translate(-2 -2)"
      />
    </>
  ),
  camera: (
    <>
      <path d="M4 7h4l1.5-2h5L16 7h4v12H4V7Z" />
      <circle cx="12" cy="13" r="3.5" />
    </>
  ),
  car: (
    <>
      <path d="m4 16 1.5-6h13l1.5 6v3h-2v-2H6v2H4v-3Z" />
      <path d="m7 10 1.5-4h7l1.5 4M7.5 14h.01M16.5 14h.01" />
    </>
  ),
};

function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}

const nav = [
  ["home", "Главная"],
  ["calendar", "Бронирования"],
  ["wallet", "Бюджет"],
  ["sparkle", "Цели и события"],
  ["check", "Дела"],
  ["terminal", "Мои проекты"],
  ["grid", "Копилка"],
] as const;

const transactions = [
  {
    icon: "briefcase",
    title: "Зарплата",
    note: "Сегодня, 10:24",
    value: "+ 245 000 ₽",
    positive: true,
    color: "blue",
  },
  {
    icon: "hotel",
    title: "Airbnb Lisboa",
    note: "Вчера, 18:05",
    value: "− 32 400 ₽",
    color: "purple",
  },
  {
    icon: "shopping",
    title: "Continente",
    note: "Вчера, 14:30",
    value: "− 4 820 ₽",
    color: "orange",
  },
  {
    icon: "coffee",
    title: "Dear Breakfast",
    note: "12 июн, 09:12",
    value: "− 1 240 ₽",
    color: "green",
  },
] as const;

const dashboardSlides = [
  {
    kind: "БЛИЖАЙШАЯ ПОЕЗДКА",
    icon: "plane",
    date: "21 — 28 ИЮНЯ · 7 ДНЕЙ",
    title: "Лиссабон",
    subtitle: "Португалия",
    image:
      "https://images.unsplash.com/photo-1525207934214-58e69a8f8a3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=85&w=1400",
    alt: "Вид на крыши Лиссабона",
    action: "Открыть поездку",
    first: ["plane", "SU 2682", "21 июн · 09:45"],
    second: ["hotel", "The Lumiares", "Заселение · 15:00"],
    aside: ["24°", "Солнечно"],
  },
  {
    kind: "СЕГОДНЯ ВЕЧЕРОМ",
    icon: "coffee",
    date: "СЕГОДНЯ · 20:30",
    title: "Ужин в Prado",
    subtitle: "Baixa · Лиссабон",
    image:
      "https://images.unsplash.com/photo-1634914204671-794b4b010259?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=85&w=1400",
    alt: "Сервированный стол в ресторане",
    action: "Детали события",
    first: ["calendar", "Столик на двоих", "Бронь подтверждена"],
    second: ["clock", "20:30", "Через 3 часа"],
    aside: ["1,2 км", "От отеля"],
  },
  {
    kind: "ЗАВТРА · РАБОТА",
    icon: "briefcase",
    date: "17 ИЮНЯ · 09:00–17:00",
    title: "Second Home",
    subtitle: "Рабочая сессия · Mercado da Ribeira",
    image:
      "https://images.unsplash.com/photo-1605641532626-5ab1dab56350?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=85&w=1400",
    alt: "Архитектура Лиссабона",
    action: "Открыть событие",
    first: ["calendar", "Дневной пропуск", "Уже оплачен"],
    second: ["briefcase", "2 встречи", "11:00 и 15:30"],
    aside: ["Wi-Fi", "300 Мбит/с"],
  },
] as const;

function ProgressRing() {
  return (
    <div className="progress-ring">
      <svg viewBox="0 0 120 120">
        <circle className="ring-bg" cx="60" cy="60" r="50" />
        <circle className="ring-value" cx="60" cy="60" r="50" />
      </svg>
      <div>
        <strong>68%</strong>
        <span>бюджета</span>
      </div>
    </div>
  );
}

function RentalTimer({
  icon,
  title,
  note,
  hours,
  progress,
  urgent,
}: {
  icon: IconName;
  title: string;
  note: string;
  hours: number;
  progress: number;
  urgent?: boolean;
}) {
  const [remaining, setRemaining] = useState(() => hours * 60 * 60 + 32 * 60);

  useEffect(() => {
    const timer = window.setInterval(() => setRemaining((value) => Math.max(0, value - 1)), 1000);
    return () => window.clearInterval(timer);
  }, []);

  const days = Math.floor(remaining / 86400);
  const leftAfterDays = remaining % 86400;
  const currentHours = Math.floor(leftAfterDays / 3600);
  const minutes = Math.floor((leftAfterDays % 3600) / 60);

  return (
    <button className={`rental-timer ${urgent ? "urgent" : ""}`}>
      <span
        className="rental-progress"
        style={{ "--progress": `${progress}%` } as React.CSSProperties}
      >
        <Icon name={icon} size={20} />
      </span>
      <div className="rental-copy">
        <span>{urgent ? "СКОРО ЗАВЕРШИТСЯ" : "АКТИВНАЯ АРЕНДА"}</span>
        <strong>{title}</strong>
        <small>{note}</small>
      </div>
      <div className="countdown">
        <div>
          <strong>{String(days).padStart(2, "0")}</strong>
          <span>дней</span>
        </div>
        <i>:</i>
        <div>
          <strong>{String(currentHours).padStart(2, "0")}</strong>
          <span>часов</span>
        </div>
        <i>:</i>
        <div>
          <strong>{String(minutes).padStart(2, "0")}</strong>
          <span>мин</span>
        </div>
      </div>
      <Icon name="chevron" size={17} />
    </button>
  );
}

function DashboardWidgets({
  openSection,
  taskDone,
  setTaskDone,
  onTask,
  onExpense,
}: {
  openSection: (section: string) => void;
  taskDone: boolean[];
  setTaskDone: React.Dispatch<React.SetStateAction<boolean[]>>;
  onTask: () => void;
  onExpense: () => void;
}) {
  return (
    <section className="dashboard-widgets">
      <article className="panel budget-card financial-widget">
        <div className="panel-head">
          <div>
            <h3>Финансовый ритм</h3>
            <span className="overline">БЮДЖЕТ · ИЮНЬ</span>
          </div>
          <button className="quick-add-button" onClick={onExpense}>
            <Icon name="plus" size={16} />
            Быстрый расход
          </button>
        </div>
        <div className="financial-layout">
          <div className="budget-main">
            <ProgressRing />
            <div className="budget-numbers">
              <span>Осталось</span>
              <strong>84 320 ₽</strong>
              <small>из 263 500 ₽</small>
            </div>
          </div>
          <div className="budget-bars">
            <div>
              <span>
                Жильё <b>82%</b>
              </span>
              <i>
                <em style={{ width: "82%" }} />
              </i>
            </div>
            <div>
              <span>
                Еда <b>54%</b>
              </span>
              <i>
                <em style={{ width: "54%" }} />
              </i>
            </div>
            <div>
              <span>
                Транспорт <b>39%</b>
              </span>
              <i>
                <em style={{ width: "39%" }} />
              </i>
            </div>
          </div>
        </div>
        <div className="budget-insight">
          <Icon name="sparkle" size={17} />
          <span>
            <strong>В отличном темпе</strong>При текущих расходах останется ~18 600 ₽
          </span>
          <button onClick={() => openSection("Бюджет")}>
            Подробнее <Icon name="arrow" size={14} />
          </button>
        </div>
      </article>

      <article className="panel tasks dashboard-focus-widget">
        <div className="panel-head">
          <div>
            <h3>Фокус дня</h3>
            <span className="overline">СЕГОДНЯ · 3 ЗАДАЧИ</span>
          </div>
          <button className="round-plus" onClick={onTask}>
            <Icon name="plus" size={18} />
          </button>
        </div>
        <div className="focus-summary">
          <span>
            <Icon name="clock" size={15} /> До ближайшего дедлайна
          </span>
          <strong>1 ч 24 мин</strong>
        </div>
        <div className="task-list">
          {[
            ["Отправить отчёт по проекту", "Работа · до 12:00"],
            ["Купить страховку для поездки", "Лиссабон · до 18 июня"],
            ["Созвон с командой", "Работа · 16:30"],
          ].map(([title, note], index) => (
            <button
              className={taskDone[index] ? "task done" : "task"}
              key={title}
              onClick={() =>
                setTaskDone((value) =>
                  value.map((item, itemIndex) => (itemIndex === index ? !item : item)),
                )
              }
            >
              <span className="task-check">
                {taskDone[index] && <Icon name="check" size={17} />}
              </span>
              <span>
                <strong>{title}</strong>
                <small>{note}</small>
              </span>
              {index === 0 && !taskDone[index] ? (
                <span className="burning-badge">Срочно</span>
              ) : (
                <Icon name="more" size={18} />
              )}
            </button>
          ))}
        </div>
        <button className="task-footer" onClick={() => openSection("Дела")}>
          Перейти к доске дел <Icon name="arrow" size={17} />
        </button>
      </article>

      <article className="panel month-spend-widget">
        <div className="widget-heading">
          <div>
            <h3>Расходы в этом месяце</h3>
            <span className="overline">ИЮНЬ · 68% БЮДЖЕТА</span>
          </div>
          <button className="round-plus" onClick={() => openSection("Бюджет")}>
            <Icon name="arrow" size={16} />
          </button>
        </div>
        <div className="spend-total">
          <div>
            <strong>179 180 ₽</strong>
            <span>из 263 500 ₽</span>
          </div>
          <span className="trend-down">−12% к маю</span>
        </div>
        <div className="spend-stack">
          <i className="housing" />
          <i className="food" />
          <i className="transport" />
          <i className="other" />
        </div>
        <div className="spend-categories">
          {[
            ["Жильё", "64 200 ₽", "housing"],
            ["Еда", "21 700 ₽", "food"],
            ["Транспорт", "11 800 ₽", "transport"],
            ["Другое", "81 480 ₽", "other"],
          ].map(([label, value, color]) => (
            <div key={label}>
              <i className={color} />
              <span>{label}</span>
              <strong>{value}</strong>
            </div>
          ))}
        </div>
        <div className="spend-note">
          <Icon name="sparkle" size={16} />
          <span>На 18 600 ₽ лучше месячного плана</span>
        </div>
      </article>

      <article className="panel upcoming-widget">
        <div className="widget-heading">
          <div>
            <h3>Ближайшие дела</h3>
            <span className="overline">СЛЕДУЮЩИЕ 3 ДНЯ</span>
          </div>
          <span className="soft-badge">5 задач</span>
        </div>
        <div className="upcoming-groups">
          <div className="upcoming-group">
            <span>СЕГОДНЯ</span>
            <button onClick={() => openSection("Дела")}>
              <i className="priority high" />
              <div>
                <strong>Отправить отчёт по проекту</strong>
                <small>Работа · до 12:00</small>
              </div>
              <time>12:00</time>
            </button>
            <button onClick={() => openSection("Дела")}>
              <i className="priority medium" />
              <div>
                <strong>Созвон с командой</strong>
                <small>Google Meet · 45 минут</small>
              </div>
              <time>16:30</time>
            </button>
          </div>
          <div className="upcoming-group">
            <span>ЗАВТРА · 17 ИЮНЯ</span>
            <button onClick={() => openSection("Дела")}>
              <i className="priority low" />
              <div>
                <strong>Купить страховку</strong>
                <small>Лиссабон · документы</small>
              </div>
              <time>10:00</time>
            </button>
            <button onClick={() => openSection("Дела")}>
              <i className="priority medium" />
              <div>
                <strong>Забронировать трансфер</strong>
                <small>Аэропорт → отель</small>
              </div>
              <time>18:00</time>
            </button>
          </div>
        </div>
        <button className="widget-footer" onClick={() => openSection("Дела")}>
          Все задачи на доске <Icon name="arrow" size={15} />
        </button>
      </article>
    </section>
  );
}

type PlanKind = "booking" | "event" | "task" | "goal" | "expense";

const planContent: Record<
  PlanKind,
  {
    eyebrow: string;
    title: string;
    subtitle: string;
    icon: IconName;
    placeholder: string;
    button: string;
  }
> = {
  booking: {
    eyebrow: "НОВАЯ АРЕНДА",
    title: "Запланировать аренду",
    subtitle: "Добавьте объект, сроки и бюджет — Астра проследит за оплатой и возвратом.",
    icon: "calendar",
    placeholder: "Например, The Lumiares",
    button: "Запланировать аренду",
  },
  event: {
    eyebrow: "НОВОЕ СОБЫТИЕ",
    title: "Запланировать событие",
    subtitle: "Создайте план, чек-лист и бюджет — Астра поможет двигаться по шагам.",
    icon: "sparkle",
    placeholder: "Например, зимовка на Бали",
    button: "Создать событие",
  },
  task: {
    eyebrow: "НОВАЯ ЗАДАЧА",
    title: "Добавить дело",
    subtitle: "Задача появится в вашем фокусе и на agile-доске.",
    icon: "check",
    placeholder: "Что нужно сделать?",
    button: "Добавить задачу",
  },
  goal: {
    eyebrow: "НОВАЯ ЦЕЛЬ",
    title: "Начать копить",
    subtitle: "Укажите цель, и Астра рассчитает комфортный темп накоплений.",
    icon: "wallet",
    placeholder: "Например, новый MacBook",
    button: "Создать цель",
  },
  expense: {
    eyebrow: "БЫСТРЫЙ РАСХОД",
    title: "Добавить расход",
    subtitle: "Запишите операцию, чтобы бюджет и прогноз Астры оставались актуальными.",
    icon: "wallet",
    placeholder: "Например, ужин в Prado",
    button: "Добавить расход",
  },
};

function Modal({
  kind,
  onClose,
  onCreated,
}: {
  kind: PlanKind;
  onClose: () => void;
  onCreated: () => void;
}) {
  const [type, setType] = useState("Жильё");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Еда");
  const content = planContent[kind];
  useEffect(() => {
    const close = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [onClose]);

  return (
    <div className="modal-backdrop" onMouseDown={onClose}>
      <div
        className="modal"
        onMouseDown={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <button className="icon-button modal-close" onClick={onClose} aria-label="Закрыть">
          <Icon name="close" />
        </button>
        <div className="modal-mark">
          <Icon name={content.icon} size={24} />
        </div>
        <p className="eyebrow">{content.eyebrow}</p>
        <h2 id="modal-title">{content.title}</h2>
        <p className="modal-subtitle">{content.subtitle}</p>
        {kind === "booking" && (
          <div className="type-switch">
            {[
              ["Жильё", "hotel"],
              ["Транспорт", "car"],
              ["Оборудование", "camera"],
            ].map(([label, icon]) => (
              <button
                className={type === label ? "active" : ""}
                key={label}
                onClick={() => setType(label)}
              >
                <Icon name={icon as IconName} size={18} />
                {label}
              </button>
            ))}
          </div>
        )}
        {kind !== "booking" && <div className="modal-spacer" />}
        <label className="field-label">Название</label>
        <input
          autoFocus
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder={
            kind === "booking" && type !== "Жильё" ? "Введите объект аренды" : content.placeholder
          }
        />
        {kind === "expense" && (
          <div className="expense-categories">
            <span className="field-label">Категория</span>
            <div>
              {[
                ["Еда", "coffee"],
                ["Транспорт", "train"],
                ["Жильё", "hotel"],
                ["Другое", "grid"],
              ].map(([label, icon]) => (
                <button
                  className={category === label ? "active" : ""}
                  onClick={() => setCategory(label)}
                  key={label}
                >
                  <Icon name={icon as IconName} size={16} />
                  {label}
                </button>
              ))}
            </div>
          </div>
        )}
        <div className={kind === "booking" ? "field-grid booking-fields" : "field-grid"}>
          <div>
            <label className="field-label">
              {kind === "expense" ? "Дата операции" : "Дата начала"}
            </label>
            <input type="date" defaultValue="2025-06-21" />
          </div>
          {kind === "booking" && (
            <div>
              <label className="field-label">Дата окончания</label>
              <input type="date" defaultValue="2025-06-28" />
            </div>
          )}
          <div>
            <label className="field-label">
              {kind === "task"
                ? "Время"
                : kind === "expense"
                  ? "Сумма"
                  : kind === "booking"
                    ? "Бюджет аренды"
                    : "Бюджет"}
            </label>
            <input placeholder={kind === "task" ? "12:00" : "0 ₽"} />
          </div>
        </div>
        <button className="primary wide" onClick={onCreated} disabled={!title.trim()}>
          {content.button} <Icon name="arrow" size={18} />
        </button>
      </div>
    </div>
  );
}

function PageTitle({
  label,
  title,
  description,
  action,
}: {
  label: string;
  title: string;
  description: string;
  action?: ReactNode;
}) {
  return (
    <section className="page-title">
      <div>
        <p className="date">{label}</p>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      {action}
    </section>
  );
}

function StatCard({
  label,
  value,
  note,
  icon,
  tone = "green",
}: {
  label: string;
  value: string;
  note: string;
  icon: IconName;
  tone?: string;
}) {
  return (
    <article className="stat-card">
      <span className={`stat-icon ${tone}`}>
        <Icon name={icon} size={19} />
      </span>
      <span>{label}</span>
      <strong>{value}</strong>
      <small>{note}</small>
    </article>
  );
}

function BookingCountdown({ seconds }: { seconds: number }) {
  const parts: Array<[number, string]> = [
    [Math.floor(seconds / 86400), "дн"],
    [Math.floor((seconds % 86400) / 3600), "ч"],
    [Math.floor((seconds % 3600) / 60), "мин"],
    [seconds % 60, "сек"],
  ];
  return (
    <div className="booking-countdown clock">
      {parts.map(([value, label], index) => (
        <Fragment key={label}>
          {index > 0 && <i>:</i>}
          <div>
            <strong>
              {String(value)
                .padStart(2, "0")
                .split("")
                .map((digit, digitIndex) => (
                  <b key={digitIndex}>{digit}</b>
                ))}
            </strong>
            <span>{label}</span>
          </div>
        </Fragment>
      ))}
    </div>
  );
}

function endingNote(seconds: number) {
  const days = Math.floor(seconds / 86400);
  if (seconds <= 0) return "Срок истёк";
  if (days >= 2) return "Осталось 2 дня";
  if (days === 1) return "Остался 1 день";
  return "Меньше суток";
}

type RentalItem = {
  id: number;
  title: string;
  type: string;
  icon: IconName;
  location: string;
  start: string;
  end: string;
  detail: string;
  hours: number;
  tone: string;
  paymentStatus: "Оплачено" | "Частично" | "Не оплачено";
  price: string;
  paid: string;
  rate: string;
  deposit: string;
  progress: number;
  periodLabel: string;
  cancelledManually?: boolean;
  urgent?: boolean;
};

/** Бэк не присылает отдельный статус «активная». Клиент выводит его сам. */
function isActiveRental(rental: RentalItem) {
  if (rental.cancelledManually) return false;
  return rental.paymentStatus === "Оплачено" || rental.paymentStatus === "Частично";
}

function ActiveLease({
  rental,
  onRemind,
  onExtend,
  onPay,
  onEdit,
  onDelete,
}: {
  rental: RentalItem;
  onRemind: () => void;
  onExtend: () => void;
  onPay: () => void;
  onEdit: () => void;
  onDelete: () => void;
}) {
  const [seconds, setSeconds] = useState(rental.hours * 3600 + 24 * 60 + 18);
  useEffect(() => {
    const timer = window.setInterval(() => setSeconds((value) => Math.max(0, value - 1)), 1000);
    return () => window.clearInterval(timer);
  }, []);
  const ending = seconds <= 2 * 86400;

  return (
    <article className={`lease ${rental.tone} ${ending ? "ending" : ""}`}>
      <div className="lease-top">
        <span className="featured-rental-icon">
          <Icon name={rental.icon} size={18} />
        </span>
        <div>
          <h3>{rental.title}</h3>
          <p>
            {rental.type} · {rental.location}
          </p>
        </div>
        <div className="lease-clock">
          {ending && <em>{endingNote(seconds)}</em>}
          <BookingCountdown seconds={seconds} />
        </div>
        <button className="rental-menu-button" onClick={onEdit} aria-label="Ещё">
          <Icon name="more" size={18} />
        </button>
      </div>

      <div className="lease-facts">
        <span>
          Стоимость <b>{rental.price}</b>
        </span>
        <span>
          Оплачено <b>{rental.paid}</b>
        </span>
        <span>
          Тариф <b>{rental.rate}</b>
        </span>
        <span>
          Залог <b>{rental.deposit}</b>
        </span>
        <button
          className={`payment-status-button ${rental.paymentStatus === "Не оплачено" ? "unpaid" : rental.paymentStatus === "Частично" ? "partial" : ""}`}
          onClick={onPay}
        >
          <i />
          {rental.paymentStatus}
        </button>
      </div>

      <div className="lease-track">
        <i>
          <b style={{ width: `${rental.progress}%` }} />
        </i>
        <small>
          {rental.periodLabel} · до {rental.end}
        </small>
      </div>

      <div className="lease-actions">
        <button onClick={onRemind}>
          <Icon name="bell" size={14} /> Напомнить
        </button>
        <button onClick={onExtend}>
          <Icon name="plus" size={14} /> Продлить
        </button>
        <button onClick={onPay}>
          <Icon name="wallet" size={14} /> Оплата
        </button>
        <button onClick={onEdit}>
          <Icon name="settings" size={14} /> Изменить
        </button>
        <button className="delete-rental-button" onClick={onDelete} aria-label={`Удалить ${rental.title}`}>
          <Icon name="close" size={14} />
        </button>
      </div>
    </article>
  );
}

function BookingsPage({ plan, toast }: { plan: () => void; toast: (text: string) => void }) {
  const [reminderBooking, setReminderBooking] = useState<string | null>(null);
  const [reminderTime, setReminderTime] = useState("За 1 час");
  const [calendarView, setCalendarView] = useState("2 недели");
  const [budgetSlice, setBudgetSlice] = useState<"all" | "paid" | "due" | "free">("all");
  const [rentals, setRentals] = useState<RentalItem[]>([
    {
      id: 1,
      title: "The Lumiares",
      type: "Жильё",
      icon: "hotel",
      location: "Rua do Diário de Notícias · Chiado",
      start: "14 июня · 15:00",
      end: "21 июня · 11:00",
      detail: "Выезд 21 июня · до 11:00",
      hours: 134,
      tone: "green",
      paymentStatus: "Оплачено",
      price: "32 400 ₽",
      paid: "32 400 ₽",
      rate: "4 629 ₽ / ночь",
      deposit: "Без залога",
      progress: 28,
      periodLabel: "2 из 7 ночей",
    },
    {
      id: 2,
      title: "Lisboa Bikes · City",
      type: "Транспорт",
      icon: "bike",
      location: "Praça do Comércio",
      start: "15 июня · 18:00",
      end: "17 июня · 18:00",
      detail: "Вернуть 17 июня · 18:00",
      hours: 28,
      tone: "orange",
      paymentStatus: "Частично",
      price: "2 800 ₽",
      paid: "1 400 ₽",
      rate: "700 ₽ / день",
      deposit: "Залог 5 000 ₽",
      progress: 72,
      periodLabel: "1,5 из 2 дней",
      urgent: true,
    },
    {
      id: 3,
      title: "Second Home",
      type: "Рабочее место",
      icon: "briefcase",
      location: "Mercado da Ribeira",
      start: "16 июня · 09:00",
      end: "19 июня · 17:00",
      detail: "Доступ ежедневно · 09:00–17:00",
      hours: 82,
      tone: "blue",
      paymentStatus: "Не оплачено",
      price: "12 000 ₽",
      paid: "0 ₽",
      rate: "4 000 ₽ / день",
      deposit: "Без залога",
      progress: 12,
      periodLabel: "1 из 3 дней",
    },
    {
      id: 4,
      title: "Автомобиль для Исландии",
      type: "Транспорт",
      icon: "car",
      location: "Рейкьявик · сентябрь",
      start: "2 сен · 10:00",
      end: "14 сен · 10:00",
      detail: "12 дней · 4 человека",
      hours: 1900,
      tone: "orange",
      paymentStatus: "Не оплачено",
      price: "75 000 ₽",
      paid: "0 ₽",
      rate: "от 61 400 ₽",
      deposit: "Залог по тарифу",
      progress: 0,
      periodLabel: "План · 12 дней",
    },
  ]);
  const [editingRental, setEditingRental] = useState<RentalItem | null>(null);
  const [deletingRental, setDeletingRental] = useState<RentalItem | null>(null);
  const [paymentRental, setPaymentRental] = useState<RentalItem | null>(null);
  const [paymentStatus, setPaymentStatus] = useState<RentalItem["paymentStatus"]>("Оплачено");
  const [paymentAmount, setPaymentAmount] = useState("");
  const [rentalChatOpen, setRentalChatOpen] = useState(false);
  const [rentalChatInput, setRentalChatInput] = useState("");
  const [rentalChatTyping, setRentalChatTyping] = useState(false);
  const [rentalChatMessages, setRentalChatMessages] = useState<
    Array<{ role: "assistant" | "user"; text: string }>
  >([
    {
      role: "assistant",
      text: "Расскажите, что хотите арендовать. Я учту сроки, бюджет, залог, условия возврата и ваше расписание.",
    },
  ]);
  const [plannedAiOpen, setPlannedAiOpen] = useState(false);
  const [plannedAiLoading, setPlannedAiLoading] = useState(false);
  const bookingDays = Array.from({ length: 15 }, (_, index) => index + 16);
  const ganttRows = [
    ["The Lumiares", "Отель · до 21 июня", 1, 6, "stay", "hotel"],
    ["Lisboa Bikes", "Аренда велосипеда", 1, 2, "transport", "bike"],
    ["Second Home", "Коворкинг", 1, 4, "work", "briefcase"],
    ["Sony A7 IV", "Камера и объектив", 3, 3, "equipment", "camera"],
    ["Sixt · Toyota RAV4", "Автомобиль · план", 11, 5, "planned", "car"],
  ] as const;
  function openPayment(rental: RentalItem) {
    setPaymentRental(rental);
    setPaymentStatus(rental.paymentStatus);
    setPaymentAmount(rental.paid);
  }

  function savePayment() {
    if (!paymentRental) return;
    const next = { ...paymentRental, paymentStatus, paid: paymentAmount || "0 ₽" };
    const wasActive = isActiveRental(paymentRental);
    const nowActive = isActiveRental(next);
    setRentals((current) => current.map((rental) => (rental.id === next.id ? next : rental)));
    setPaymentRental(null);
    if (!wasActive && nowActive) toast("Оплата есть — аренда перешла в активные");
    else if (wasActive && !nowActive) toast("Оплаты нет — аренда снова в плане");
    else toast("Статус оплаты обновлён");
  }

  function cancelRental(rental: RentalItem) {
    setRentals((current) =>
      current.map((item) => (item.id === rental.id ? { ...item, cancelledManually: true } : item)),
    );
    setDeletingRental(null);
    toast("Аренда отменена вручную и не станет активной");
  }

  function saveRental() {
    if (!editingRental) return;
    setRentals((current) =>
      current.map((rental) => (rental.id === editingRental.id ? editingRental : rental)),
    );
    setEditingRental(null);
    toast("Изменения аренды сохранены");
  }

  function sendRentalChat(message = rentalChatInput) {
    const text = message.trim();
    if (!text) return;
    setRentalChatMessages((current) => [...current, { role: "user", text }]);
    setRentalChatInput("");
    setRentalChatTyping(true);
    window.setTimeout(() => {
      setRentalChatMessages((current) => [
        ...current,
        {
          role: "assistant",
          text: "Я нашла 18 подходящих вариантов. Лучшее соотношение цены и условий — у предложений с бесплатной отменой, залогом до 10 000 ₽ и гибким возвратом. Могу сузить поиск по району или поставщику.",
        },
      ]);
      setRentalChatTyping(false);
    }, 900);
  }

  function openPlannedAi() {
    setPlannedAiOpen(true);
    setPlannedAiLoading(true);
    window.setTimeout(() => setPlannedAiLoading(false), 1200);
  }

  const activeRentals = rentals.filter(isActiveRental);
  const plannedRentals = rentals.filter(
    (rental) => !rental.cancelledManually && !isActiveRental(rental),
  );
  const endingSoon = activeRentals.filter((rental) => rental.hours <= 48);
  const soonestRental = [...activeRentals].sort((left, right) => left.hours - right.hours)[0];
  const soonestDate = soonestRental?.end.split(" · ")[0] ?? "—";

  return (
    <div className="section-page bookings-page">
      <PageTitle
        label="АРЕНДА И ПОДПИСКИ"
        title="Аренда"
        description="Жильё, транспорт, рабочие места и оборудование — сроки, стоимость и продление в одном месте."
        action={
          <div className="booking-page-actions">
            <button className="ai-action" onClick={() => setRentalChatOpen(true)}>
              <Icon name="sparkle" size={17} /> Подобрать с AI
            </button>
            <button className="primary page-action" onClick={plan}>
              Запланировать <Icon name="plus" size={17} />
            </button>
          </div>
        }
      />
      <div className="stats-row">
        <StatCard
          label="Активные аренды"
          value={String(activeRentals.length)}
          note={activeRentals.length ? "Оплачены и не отменены" : "Пока нет оплаченных"}
          icon="calendar"
        />
        <StatCard
          label="Бюджет на аренду"
          value="240 000 ₽"
          note="Общий лимит · свободно 67 200 ₽"
          icon="wallet"
          tone="orange"
        />
        <StatCard
          label="Закончится скоро"
          value={String(endingSoon.length)}
          note={endingSoon.length ? "В ближайшие 2 дня" : "В ближайшие 2 дня нет"}
          icon="clock"
          tone="blue"
        />
        <StatCard
          label="Ближайшее окончание"
          value={soonestDate}
          note={soonestRental ? soonestRental.title : "Нет активных аренд"}
          icon="calendar"
          tone="purple"
        />
      </div>

      <section className="panel active-bookings-panel">
        <div className="workspace-head">
          <div>
            <h3>Активные аренды</h3>
            <span className="overline">ОПЛАЧЕНЫ И НЕ ОТМЕНЕНЫ</span>
          </div>
          <button className="plain-button" onClick={() => toast("Архив бронирований открыт")}>
            Архив аренды <Icon name="chevron" size={15} />
          </button>
        </div>
        <div className="rental-contracts-list">
          {activeRentals.map((rental) => (
            <ActiveLease
              key={rental.id}
              rental={rental}
              onRemind={() => setReminderBooking(rental.title)}
              onExtend={() => toast(`${rental.title}: продление открыто`)}
              onPay={() => openPayment(rental)}
              onEdit={() => setEditingRental({ ...rental })}
              onDelete={() => setDeletingRental(rental)}
            />
          ))}
          {activeRentals.length === 0 && (
            <p className="lease-empty">Нет активных аренд. Они появятся после оплаты плана.</p>
          )}
        </div>
      </section>

      <div className="booking-budget-layout">
        <article className="panel booking-budget-card">
          <div className="workspace-head">
            <div>
              <h3>Бюджет аренды</h3>
              <span className="overline">ПЛАН-ФАКТ · ИЮНЬ</span>
            </div>
            <div className="budget-header-actions">
              <button onClick={() => toast("Показан май")}>
                <Icon name="chevron" size={14} />
              </button>
              <span>Июнь 2025</span>
              <button onClick={() => toast("Показан июль")}>
                <Icon name="chevron" size={14} />
              </button>
            </div>
          </div>
          <div className={`rent-budget ${budgetSlice}`}>
            <div className="rent-budget-hero">
              <div className="rent-budget-ring" aria-hidden="true">
                <span>
                  <strong>
                    {budgetSlice === "paid"
                      ? "47%"
                      : budgetSlice === "due"
                        ? "25%"
                        : budgetSlice === "free"
                          ? "28%"
                          : "72%"}
                  </strong>
                  <small>{budgetSlice === "all" ? "занято" : "доля"}</small>
                </span>
              </div>
              <div className="rent-budget-hero-copy">
                <span>Свободно на новые аренды</span>
                <strong>67 200 ₽</strong>
                <small>Лимит июня 240 000 ₽ · уже назначено 172 800 ₽</small>
              </div>
            </div>

            <div className="rent-budget-shares" role="group" aria-label="Состав лимита">
              {[
                ["paid", "Оплачено", "112 400 ₽", "Уже списано"],
                ["due", "К оплате", "60 400 ₽", "До 24 июня"],
                ["free", "Свободно", "67 200 ₽", "Можно взять ещё"],
              ].map(([id, label, value, note]) => (
                <button
                  className={budgetSlice === id ? "active" : ""}
                  key={id}
                  onClick={() => setBudgetSlice((current) => (current === id ? "all" : (id as "paid" | "due" | "free")))}
                >
                  <i />
                  <span>{label}</span>
                  <strong>{value}</strong>
                  <small>{note}</small>
                </button>
              ))}
            </div>

            <div className="rent-budget-body">
              <div className="rent-budget-mix">
                <div className="rent-budget-subhead">
                  <div>
                    <strong>Куда уходит лимит</strong>
                    <span>Доли от назначенных 172 800 ₽</span>
                  </div>
                  <button onClick={() => toast("Подробная аналитика открыта")}>Подробнее</button>
                </div>
                <div className="rent-mix-bar" aria-hidden="true">
                  <i className="housing" />
                  <i className="mobility" />
                  <i className="workspace" />
                  <i className="gear" />
                </div>
                {[
                  ["Жильё", "hotel", "92 400 ₽", "54%", "housing", "The Lumiares"],
                  ["Транспорт", "car", "38 800 ₽", "23%", "mobility", "Велосипед и план на авто"],
                  ["Рабочие места", "briefcase", "24 000 ₽", "14%", "workspace", "Second Home"],
                  ["Оборудование", "camera", "17 600 ₽", "9%", "gear", "Камера на выходные"],
                ].map(([label, icon, value, percent, tone, note]) => (
                  <button
                    className="rent-mix-row"
                    key={label}
                    onClick={() => toast(`${label}: ${value}`)}
                  >
                    <span className={`cost-icon ${tone}`}>
                      <Icon name={icon as IconName} size={15} />
                    </span>
                    <div>
                      <strong>{label}</strong>
                      <small>{note}</small>
                    </div>
                    <p>
                      <strong>{value}</strong>
                      <span>{percent}</span>
                    </p>
                  </button>
                ))}
              </div>

              <div className="rent-budget-schedule">
                <div className="rent-budget-subhead">
                  <div>
                    <strong>Что списать дальше</strong>
                    <span>Три платежа · 60 400 ₽</span>
                  </div>
                </div>
                <ol>
                  {[
                    ["17 июн", "Lisboa Bikes", "1 400 ₽", "Остаток", false],
                    ["19 июн", "Second Home", "12 000 ₽", "Полная оплата", false],
                    ["24 июн", "Sixt · RAV4", "47 000 ₽", "Предоплата", true],
                  ].map(([date, title, value, type, heavy]) => (
                    <li key={String(title)} className={heavy ? "heavy" : ""}>
                      <button onClick={() => toast(`${title}: платёж открыт`)}>
                        <time>{date}</time>
                        <div>
                          <strong>{title}</strong>
                          <small>{type}</small>
                        </div>
                        <b>{value}</b>
                      </button>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            <div className="rent-budget-scenario">
              <Icon name="sparkle" size={16} />
              <p>
                <strong>Если взять автомобиль в Исландии</strong>
                <span>Предоплата 47 000 ₽ оставит резерв 20 200 ₽. Самая крупная доля по-прежнему жильё.</span>
              </p>
              <button onClick={() => toast("Прогноз бюджета открыт")}>
                Прогноз <Icon name="arrow" size={14} />
              </button>
            </div>
          </div>
        </article>

        <div className="planned-stack">
          {plannedRentals.map((rental) => (
            <article className="panel planned-booking-card" key={rental.id}>
              <div className="planned-head">
                <span className="planned-icon">
                  <Icon name={rental.icon} size={18} />
                </span>
                <span className="overline">ПЛАН · НЕ ОПЛАЧЕНО</span>
                <button onClick={() => setDeletingRental(rental)} aria-label={`Отменить ${rental.title}`}>
                  <Icon name="close" size={16} />
                </button>
              </div>
              <h3>{rental.title}</h3>
              <p>
                {rental.detail} · {rental.location}
              </p>
              <div className="planned-price">
                <span>К оплате</span>
                <strong>{rental.price}</strong>
              </div>
              {rental.id === 4 && (
                <div className="ai-saving">
                  <Icon name="sparkle" size={15} />
                  <span>Астра нашла варианты от 61 400 ₽</span>
                </div>
              )}
              <div className="planned-actions">
                {rental.id === 4 && (
                  <button className="secondary-button" onClick={openPlannedAi}>
                    Подобрать
                  </button>
                )}
                <button className="primary" onClick={() => openPayment(rental)}>
                  Оплатить <Icon name="arrow" size={15} />
                </button>
              </div>
            </article>
          ))}
          {plannedRentals.length === 0 && (
            <article className="panel planned-booking-card">
              <span className="overline">ПЛАН</span>
              <h3>Нет неоплаченных аренд</h3>
              <p>Новая аренда останется здесь, пока её не оплатят.</p>
              <div className="planned-actions">
                <button className="primary" onClick={plan}>
                  Запланировать <Icon name="arrow" size={15} />
                </button>
              </div>
            </article>
          )}
        </div>
      </div>

      <section className="panel booking-scheduler">
        <div className="scheduler-head">
          <div>
            <h3>Календарь аренды</h3>
            <span className="overline">ВСЕ ОБЪЕКТЫ · 16–30 ИЮНЯ</span>
          </div>
          <div className="scheduler-controls">
            <button
              aria-label="Предыдущий период"
              onClick={() => toast("Показан предыдущий период")}
            >
              <Icon name="chevron" size={16} />
            </button>
            <button
              className="today-button"
              onClick={() => toast("Календарь возвращён к сегодняшней дате")}
            >
              Сегодня
            </button>
            <button aria-label="Следующий период" onClick={() => toast("Показан следующий период")}>
              <Icon name="chevron" size={16} />
            </button>
            <div className="segmented">
              {["2 недели", "Месяц"].map((item) => (
                <button
                  className={calendarView === item ? "active" : ""}
                  onClick={() => setCalendarView(item)}
                  key={item}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="scheduler-scroll">
          <div className="gantt-calendar">
            <div className="gantt-corner">
              <span>Объект аренды</span>
            </div>
            {bookingDays.map((day) => (
              <div
                className={`gantt-day ${[21, 22, 28, 29].includes(day) ? "weekend" : ""} ${day === 16 ? "today" : ""}`}
                key={day}
              >
                <span>{["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"][(day - 16) % 7]}</span>
                <strong>{day}</strong>
              </div>
            ))}
            {ganttRows.map(([title, note, start, span, tone, icon]) => (
              <div className="gantt-row" key={title}>
                <button className="gantt-label" onClick={() => toast(`${title}: детали открыты`)}>
                  <span>
                    <Icon name={icon as IconName} size={16} />
                  </span>
                  <div>
                    <strong>{title}</strong>
                    <small>{note}</small>
                  </div>
                </button>
                <div className="gantt-track">
                  <button
                    className={`gantt-bar ${tone}`}
                    style={{ gridColumn: `${start} / span ${span}` }}
                    onClick={() => toast(`${title}: бронирование открыто`)}
                  >
                    <span>{title}</span>
                    {span > 1 && <small>{span} дн.</small>}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="scheduler-legend">
          <span>
            <i className="stay" />
            Проживание
          </span>
          <span>
            <i className="transport" />
            Транспорт
          </span>
          <span>
            <i className="work" />
            Рабочие места
          </span>
          <span>
            <i className="equipment" />
            Оборудование
          </span>
          <span>
            <i className="planned" />
            Планируется
          </span>
          <button onClick={() => toast("Экспорт календаря подготовлен")}>
            <Icon name="calendar" size={14} /> Экспорт в календарь
          </button>
        </div>
      </section>

      <div className="booking-insights-grid">
        <article className="panel booking-insight-card warning">
          <span>
            <Icon name="bell" size={18} />
          </span>
          <div>
            <strong>Бесплатная отмена заканчивается завтра</strong>
            <p>The Lumiares можно отменить без штрафа до 18 июня, 15:00.</p>
          </div>
          <button onClick={() => toast("Условия отмены открыты")}>
            <Icon name="chevron" size={15} />
          </button>
        </article>
        <article className="panel booking-insight-card saving">
          <span>
            <Icon name="sparkle" size={18} />
          </span>
          <div>
            <strong>Можно сэкономить 13 600 ₽</strong>
            <p>Астра нашла более выгодную аренду автомобиля для Исландии.</p>
          </div>
          <button onClick={openPlannedAi}>
            <Icon name="chevron" size={15} />
          </button>
        </article>
      </div>

      {rentalChatOpen && (
        <div className="context-ai-backdrop">
          <section className="context-ai-panel rental-chat-panel">
            <header className="context-ai-header">
              <div className="chat-identity">
                <span className="chat-brand">
                  <span className="brand-mark">
                    <span />
                  </span>
                  <i />
                </span>
                <div>
                  <strong>Астра · подбор аренды</strong>
                  <span>Учитывает ваш бюджет, календарь и активные договоры</span>
                </div>
              </div>
              <button onClick={() => setRentalChatOpen(false)} aria-label="Закрыть">
                <Icon name="close" size={20} />
              </button>
            </header>
            <div className="rental-chat-layout">
              <div className="rental-chat-main">
                <div className="rental-chat-messages">
                  <div className="rental-chat-day">
                    <span>Новый поиск</span>
                  </div>
                  {rentalChatMessages.map((message, index) => (
                    <div
                      className={`rental-chat-message ${message.role}`}
                      key={`${message.text}-${index}`}
                    >
                      {message.role === "assistant" && (
                        <span className="chat-mini-brand">
                          <span className="brand-mark">
                            <span />
                          </span>
                        </span>
                      )}
                      <div>
                        <p>{message.text}</p>
                        <time>сейчас</time>
                      </div>
                    </div>
                  ))}
                  {rentalChatTyping && (
                    <div className="rental-chat-message assistant">
                      <span className="chat-mini-brand">
                        <span className="brand-mark">
                          <span />
                        </span>
                      </span>
                      <div className="typing-bubble">
                        <i />
                        <i />
                        <i />
                      </div>
                    </div>
                  )}
                </div>
                <div className="rental-chat-prompts">
                  {["Автомобиль на 12 дней", "Жильё до 80 000 ₽", "Камера на выходные"].map(
                    (prompt) => (
                      <button onClick={() => sendRentalChat(prompt)} key={prompt}>
                        {prompt}
                      </button>
                    ),
                  )}
                </div>
                <div className="rental-chat-composer">
                  <button onClick={() => toast("Добавьте договор или фото объекта")}>
                    <Icon name="clip" size={18} />
                  </button>
                  <textarea
                    rows={1}
                    value={rentalChatInput}
                    onChange={(event) => setRentalChatInput(event.target.value)}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" && !event.shiftKey) {
                        event.preventDefault();
                        sendRentalChat();
                      }
                    }}
                    placeholder="Например: нужен автомобиль в Исландии на 12 дней, бюджет до 70 000 ₽"
                  />
                  <button className="send" onClick={() => sendRentalChat()}>
                    <Icon name="arrow" size={18} />
                  </button>
                </div>
              </div>
              <aside className="rental-chat-context">
                <span className="overline">КОНТЕКСТ ПОИСКА</span>
                <h3>Что уже знает Астра</h3>
                <div className="context-fact">
                  <Icon name="calendar" size={17} />
                  <p>
                    <strong>Сроки</strong>
                    <span>1–12 сентября · 12 дней</span>
                  </p>
                </div>
                <div className="context-fact">
                  <Icon name="wallet" size={17} />
                  <p>
                    <strong>Доступный бюджет</strong>
                    <span>67 200 ₽ на новые аренды</span>
                  </p>
                </div>
                <div className="context-fact">
                  <Icon name="user" size={17} />
                  <p>
                    <strong>Участники</strong>
                    <span>4 человека · 2 водителя</span>
                  </p>
                </div>
                <div className="context-fact">
                  <Icon name="sparkle" size={17} />
                  <p>
                    <strong>Предпочтения</strong>
                    <span>Без залога · гибкий возврат</span>
                  </p>
                </div>
                <div className="context-warning">
                  <Icon name="bell" size={16} />
                  <span>Астра предупредит о скрытых сборах и пересечениях с другими арендами.</span>
                </div>
                <button onClick={() => toast("Контекст аренды обновлён")}>
                  Изменить контекст <Icon name="settings" size={15} />
                </button>
              </aside>
            </div>
          </section>
        </div>
      )}

      {plannedAiOpen && (
        <div className="context-ai-backdrop">
          <section className="context-ai-panel planned-ai-panel">
            <header className="context-ai-header">
              <div>
                <span className="overline">ASTRA AI · ДЕМО-ПОДБОР</span>
                <h2>Автомобиль для Исландии</h2>
                <p>1–12 сентября · 4 человека · бюджет до 75 000 ₽</p>
              </div>
              <button onClick={() => setPlannedAiOpen(false)} aria-label="Закрыть">
                <Icon name="close" size={20} />
              </button>
            </header>
            {plannedAiLoading ? (
              <div className="planned-ai-loading">
                <span className="ai-orbit">
                  <Icon name="sparkle" size={24} />
                </span>
                <h3>Астра сравнивает варианты</h3>
                <p>Проверяем цены, страховку, залог, пробег и условия возврата у 8 поставщиков.</p>
                <div>
                  <i />
                  <i />
                  <i />
                </div>
              </div>
            ) : (
              <div className="planned-ai-results">
                <div className="planned-ai-summary">
                  <div>
                    <span className="overline">РЕЗУЛЬТАТ ПОИСКА</span>
                    <h3>Нашли 18 вариантов</h3>
                    <p>Три предложения лучше всего подходят под ваш бюджет и маршрут.</p>
                  </div>
                  <div className="ai-summary-saving">
                    <Icon name="sparkle" size={18} />
                    <p>
                      <span>Потенциальная экономия</span>
                      <strong>до 13 600 ₽</strong>
                    </p>
                  </div>
                </div>
                <div className="external-rental-results">
                  {[
                    [
                      "Sixt",
                      "Toyota RAV4 AWD",
                      "Автомат · полная страховка · 2 водителя",
                      "61 400 ₽",
                      "https://www.sixt.com",
                      "Лучший выбор",
                    ],
                    [
                      "Hertz",
                      "Kia Sportage 4x4",
                      "Автомат · безлимитный пробег · залог 8 000 ₽",
                      "66 800 ₽",
                      "https://www.hertz.com",
                      "Гибкий возврат",
                    ],
                    [
                      "Localrent",
                      "Dacia Duster",
                      "Механика · страховка включена · залог 5 000 ₽",
                      "54 900 ₽",
                      "https://localrent.com",
                      "Самая низкая цена",
                    ],
                  ].map(([provider, title, note, price, url, badge], index) => (
                    <article className={index === 0 ? "recommended" : ""} key={provider}>
                      <div className="external-result-head">
                        <span>{provider.slice(0, 1)}</span>
                        <div>
                          <strong>{provider}</strong>
                          <small>{badge}</small>
                        </div>
                        {index === 0 && <b>Рекомендуем</b>}
                      </div>
                      <h3>{title}</h3>
                      <p>{note}</p>
                      <div className="external-price">
                        <span>За 12 дней</span>
                        <strong>{price}</strong>
                      </div>
                      <div className="external-result-actions">
                        <button onClick={() => toast(`${provider}: добавлено в сравнение`)}>
                          Сравнить
                        </button>
                        <a href={url} target="_blank" rel="noreferrer">
                          Открыть предложение <Icon name="arrow" size={14} />
                        </a>
                      </div>
                    </article>
                  ))}
                </div>
                <div className="planned-ai-footer">
                  <div>
                    <Icon name="check" size={17} />
                    <p>
                      <strong>Ссылки ведут на сайты поставщиков</strong>
                      <span>Цены демонстрационные и могут измениться при переходе.</span>
                    </p>
                  </div>
                  <button className="primary" onClick={plan}>
                    Добавить вариант в план <Icon name="plus" size={15} />
                  </button>
                </div>
              </div>
            )}
          </section>
        </div>
      )}

      {editingRental && (
        <div className="modal-backdrop" onMouseDown={() => setEditingRental(null)}>
          <div className="modal rental-edit-modal" onMouseDown={(event) => event.stopPropagation()}>
            <button
              className="icon-button modal-close"
              onClick={() => setEditingRental(null)}
              aria-label="Закрыть"
            >
              <Icon name="close" />
            </button>
            <div className="modal-mark">
              <Icon name={editingRental.icon} size={23} />
            </div>
            <p className="eyebrow">РЕДАКТИРОВАНИЕ АРЕНДЫ</p>
            <h2>{editingRental.title}</h2>
            <p className="modal-subtitle">
              Измените объект, сроки или финансовые условия договора.
            </p>
            <div className="rental-edit-form">
              <label>
                <span className="field-label">Название</span>
                <input
                  value={editingRental.title}
                  onChange={(event) =>
                    setEditingRental({ ...editingRental, title: event.target.value })
                  }
                />
              </label>
              <label>
                <span className="field-label">Адрес или место</span>
                <input
                  value={editingRental.location}
                  onChange={(event) =>
                    setEditingRental({ ...editingRental, location: event.target.value })
                  }
                />
              </label>
              <div className="rental-edit-grid">
                <label>
                  <span className="field-label">Начало</span>
                  <input
                    value={editingRental.start}
                    onChange={(event) =>
                      setEditingRental({ ...editingRental, start: event.target.value })
                    }
                  />
                </label>
                <label>
                  <span className="field-label">Окончание</span>
                  <input
                    value={editingRental.end}
                    onChange={(event) =>
                      setEditingRental({ ...editingRental, end: event.target.value })
                    }
                  />
                </label>
              </div>
              <div className="rental-edit-grid">
                <label>
                  <span className="field-label">Стоимость</span>
                  <input
                    value={editingRental.price}
                    onChange={(event) =>
                      setEditingRental({ ...editingRental, price: event.target.value })
                    }
                  />
                </label>
                <label>
                  <span className="field-label">Тариф</span>
                  <input
                    value={editingRental.rate}
                    onChange={(event) =>
                      setEditingRental({ ...editingRental, rate: event.target.value })
                    }
                  />
                </label>
              </div>
              <label>
                <span className="field-label">Условия залога</span>
                <input
                  value={editingRental.deposit}
                  onChange={(event) =>
                    setEditingRental({ ...editingRental, deposit: event.target.value })
                  }
                />
              </label>
            </div>
            <button
              className="primary wide"
              onClick={saveRental}
              disabled={!editingRental.title.trim()}
            >
              Сохранить изменения <Icon name="check" size={17} />
            </button>
          </div>
        </div>
      )}

      {paymentRental && (
        <div className="modal-backdrop" onMouseDown={() => setPaymentRental(null)}>
          <div className="modal payment-modal" onMouseDown={(event) => event.stopPropagation()}>
            <button
              className="icon-button modal-close"
              onClick={() => setPaymentRental(null)}
              aria-label="Закрыть"
            >
              <Icon name="close" />
            </button>
            <div className="modal-mark payment">
              <Icon name="wallet" size={23} />
            </div>
            <p className="eyebrow">ОПЛАТА АРЕНДЫ</p>
            <h2>{paymentRental.title}</h2>
            <p className="modal-subtitle">
              Общая стоимость {paymentRental.price}. Полная или частичная оплата делает аренду
              активной, если её не отменили вручную.
            </p>
            <div className="payment-status-options">
              {(["Оплачено", "Частично", "Не оплачено"] as const).map((status) => (
                <button
                  className={paymentStatus === status ? "active" : ""}
                  onClick={() => {
                    setPaymentStatus(status);
                    if (status === "Оплачено") setPaymentAmount(paymentRental.price);
                    if (status === "Не оплачено") setPaymentAmount("0 ₽");
                  }}
                  key={status}
                >
                  <i />
                  <span>{status}</span>
                  {paymentStatus === status && <Icon name="check" size={15} />}
                </button>
              ))}
            </div>
            <label className="payment-amount-field">
              <span className="field-label">Оплаченная сумма</span>
              <input
                value={paymentAmount}
                onChange={(event) => setPaymentAmount(event.target.value)}
                placeholder="0 ₽"
              />
              <small>Из общей суммы {paymentRental.price}</small>
            </label>
            <div className="payment-progress-preview">
              <span>
                <Icon name="sparkle" size={15} /> Бюджет обновится автоматически
              </span>
            </div>
            <button className="primary wide" onClick={savePayment}>
              Сохранить оплату <Icon name="check" size={17} />
            </button>
          </div>
        </div>
      )}

      {deletingRental && (
        <div className="modal-backdrop" onMouseDown={() => setDeletingRental(null)}>
          <div
            className="modal delete-rental-modal"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button
              className="icon-button modal-close"
              onClick={() => setDeletingRental(null)}
              aria-label="Закрыть"
            >
              <Icon name="close" />
            </button>
            <div className="delete-rental-icon">
              <Icon name="close" size={22} />
            </div>
            <p className="eyebrow">РУЧНАЯ ОТМЕНА</p>
            <h2>Отменить {deletingRental.title}?</h2>
            <p className="modal-subtitle">
              Отменённая аренда не попадёт в активные, даже если по ней уже есть оплата.
            </p>
            <div className="delete-rental-warning">
              <Icon name="bell" size={17} />
              <span>Это ручная отмена. Сам договор у поставщика здесь не закрывается.</span>
            </div>
            <div className="delete-rental-actions">
              <button className="secondary-button" onClick={() => setDeletingRental(null)}>
                Оставить
              </button>
              <button className="danger-button" onClick={() => cancelRental(deletingRental)}>
                Отменить аренду
              </button>
            </div>
          </div>
        </div>
      )}

      {reminderBooking && (
        <div className="modal-backdrop" onMouseDown={() => setReminderBooking(null)}>
          <div className="modal reminder-modal" onMouseDown={(event) => event.stopPropagation()}>
            <button
              className="icon-button modal-close"
              onClick={() => setReminderBooking(null)}
              aria-label="Закрыть"
            >
              <Icon name="close" />
            </button>
            <div className="modal-mark reminder">
              <Icon name="bell" size={23} />
            </div>
            <p className="eyebrow">SMS-НАПОМИНАНИЕ</p>
            <h2>Когда напомнить?</h2>
            <p className="modal-subtitle">
              {reminderBooking} · сообщение придёт на +7 ••• •••-42-18
            </p>
            <div className="reminder-options">
              {["За 1 час", "За 3 часа", "За 1 день", "За 2 дня"].map((item) => (
                <button
                  className={reminderTime === item ? "active" : ""}
                  onClick={() => setReminderTime(item)}
                  key={item}
                >
                  <span>{item}</span>
                  <i>{reminderTime === item && <em />}</i>
                </button>
              ))}
            </div>
            <button className="custom-reminder" onClick={() => setReminderTime("Своё время")}>
              <Icon name="calendar" size={17} />
              <span>Настроить дату и время</span>
              <Icon name="chevron" size={15} />
            </button>
            {reminderTime === "Своё время" && (
              <div className="custom-reminder-fields">
                <input type="date" defaultValue="2025-06-22" />
                <input type="time" defaultValue="16:00" />
              </div>
            )}
            <button
              className="primary wide"
              onClick={() => {
                setReminderBooking(null);
                toast(`SMS придёт: ${reminderTime.toLowerCase()}`);
              }}
            >
              Сохранить напоминание <Icon name="check" size={17} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

type LedgerRow = {
  id: number;
  date: string;
  title: string;
  kind: "income" | "expense";
  category: string;
  amount: number;
};

function formatMoney(value: number) {
  return `${new Intl.NumberFormat("ru-RU").format(value)} ₽`;
}

const budgetToday = 16;

function ledgerDay(date: string) {
  return Number(date.split(" ")[0]);
}

function ledgerMonth(date: string) {
  return date.split(" ")[1] ?? "";
}

function sumRows(rows: LedgerRow[], kind: LedgerRow["kind"], month?: string, maxDay?: number) {
  return rows.reduce((sum, row) => {
    if (row.kind !== kind) return sum;
    if (month && ledgerMonth(row.date) !== month) return sum;
    if (maxDay != null && ledgerDay(row.date) > maxDay) return sum;
    return sum + row.amount;
  }, 0);
}

const statementMonths = ["янв", "фев", "мар", "апр", "мая", "июн", "июл", "авг", "сен", "окт", "ноя", "дек"];

const statementBanks = [
  { id: "sber", name: "Сбер" },
  { id: "tbank", name: "Т-Банк" },
  { id: "alfa", name: "Альфа-Банк" },
  { id: "vtb", name: "ВТБ" },
  { id: "gpb", name: "Газпромбанк" },
  { id: "raif", name: "Райффайзен" },
  { id: "sovcom", name: "Совкомбанк" },
  { id: "rshb", name: "Россельхозбанк" },
  { id: "mts", name: "МТС Банк" },
  { id: "ozon", name: "Ozon Банк" },
  { id: "yandex", name: "Яндекс Банк" },
  { id: "pochta", name: "Почта Банк" },
];

function BankLogo({ id }: { id: string }) {
  const frame = {
    className: "bank-logo",
    viewBox: "0 0 36 36",
    "aria-hidden": true as const,
  };
  if (id === "sber") {
    return (
      <svg {...frame}>
        <rect width="36" height="36" rx="11" fill="#21A038" />
        <path d="M10 18.5 15.2 24 26 12" fill="none" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (id === "tbank") {
    return (
      <svg {...frame}>
        <rect width="36" height="36" rx="11" fill="#FFDD2D" />
        <path d="M9 11h18M18 11v15" fill="none" stroke="#111" strokeWidth="3.2" strokeLinecap="round" />
      </svg>
    );
  }
  if (id === "alfa") {
    return (
      <svg {...frame}>
        <rect width="36" height="36" rx="11" fill="#EF3124" />
        <path d="M18 8 26 27h-3.2l-1.5-3.6h-6.6L13.2 27H10L18 8Zm-3.2 12.4h6.4L18 13.2l-3.2 7.2Z" fill="#fff" />
      </svg>
    );
  }
  if (id === "vtb") {
    return (
      <svg {...frame}>
        <rect width="36" height="36" rx="11" fill="#0A2896" />
        <text x="18" y="23" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="700">ВТБ</text>
      </svg>
    );
  }
  if (id === "gpb") {
    return (
      <svg {...frame}>
        <rect width="36" height="36" rx="11" fill="#1D4E89" />
        <path d="M18 7c3 4 7 7.5 7 13a7 7 0 0 1-14 0c0-5.5 4-9 7-13Z" fill="#7EC8E3" />
        <path d="M18 14c1.6 2.2 3.4 4 3.4 6.4a3.4 3.4 0 0 1-6.8 0C14.6 18 16.4 16.2 18 14Z" fill="#fff" />
      </svg>
    );
  }
  if (id === "raif") {
    return (
      <svg {...frame}>
        <rect width="36" height="36" rx="11" fill="#FFE100" />
        <path d="M8 24 18 9l10 15H8Z" fill="#111" />
      </svg>
    );
  }
  if (id === "sovcom") {
    return (
      <svg {...frame}>
        <rect width="36" height="36" rx="11" fill="#D11F3A" />
        <path d="M0 18h36v7c0 6-5 11-11 11H11C5 36 0 31 0 25v-7Z" fill="#123A8C" />
        <circle cx="18" cy="16" r="4" fill="#fff" />
      </svg>
    );
  }
  if (id === "rshb") {
    return (
      <svg {...frame}>
        <rect width="36" height="36" rx="11" fill="#2E7D32" />
        <path d="M18 8v20M13 12c2 2 3 4 5 6M23 12c-2 2-3 4-5 6M12 18c2.2 1.2 4 1.6 6 1.6S21.8 19.2 24 18" fill="none" stroke="#E8F5E9" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    );
  }
  if (id === "mts") {
    return (
      <svg {...frame}>
        <rect width="36" height="36" rx="11" fill="#E30611" />
        <ellipse cx="18" cy="19" rx="7" ry="9" fill="#fff" />
      </svg>
    );
  }
  if (id === "ozon") {
    return (
      <svg {...frame}>
        <rect width="36" height="36" rx="11" fill="#005BFF" />
        <circle cx="18" cy="18" r="8" fill="none" stroke="#fff" strokeWidth="3" />
      </svg>
    );
  }
  if (id === "yandex") {
    return (
      <svg {...frame}>
        <rect width="36" height="36" rx="11" fill="#FC3F1D" />
        <circle cx="16" cy="16" r="6" fill="none" stroke="#fff" strokeWidth="2.4" />
        <path d="M20.5 20.5 26 26" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" />
      </svg>
    );
  }
  if (id === "pochta") {
    return (
      <svg {...frame}>
        <rect width="36" height="36" rx="11" fill="#1A2B7B" />
        <rect x="8" y="12" width="20" height="13" rx="2" fill="#fff" />
        <path d="M8 13.5 18 21l10-7.5" fill="none" stroke="#1A2B7B" strokeWidth="1.6" />
      </svg>
    );
  }
  return (
    <svg {...frame}>
      <rect width="36" height="36" rx="11" fill="#29483a" />
    </svg>
  );
}

function statementDate(raw: string) {
  const iso = raw.match(/(\d{4})-(\d{2})-(\d{2})/);
  if (iso) return `${Number(iso[3])} ${statementMonths[Number(iso[2]) - 1]}`;
  const dotted = raw.match(/(\d{1,2})[./](\d{1,2})[./](\d{2,4})/);
  if (dotted) return `${Number(dotted[1])} ${statementMonths[Number(dotted[2]) - 1] ?? "июн"}`;
  const named = raw.toLowerCase().match(/(\d{1,2})\s+(янв|фев|мар|апр|ма[йя]|июн|июл|авг|сен|окт|ноя|дек)/);
  if (named) return `${Number(named[1])} ${named[2] === "май" ? "мая" : named[2]}`;
  return "16 июн";
}

function splitCsvLine(line: string, delimiter: string) {
  const cells: string[] = [];
  let current = "";
  let quoted = false;
  for (const char of line) {
    if (char === '"') {
      quoted = !quoted;
      continue;
    }
    if (char === delimiter && !quoted) {
      cells.push(current.trim());
      current = "";
      continue;
    }
    current += char;
  }
  cells.push(current.trim());
  return cells;
}

function parseStatement(text: string) {
  const lines = text
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);
  if (!lines.length) return [];
  const sample = lines.slice(0, 5).join("\n");
  const delimiter = (sample.match(/;/g) || []).length >= (sample.match(/,/g) || []).length ? ";" : ",";
  const table = lines.map((line) => splitCsvLine(line, delimiter));
  const header = table[0].map((cell) => cell.toLowerCase());
  const hasHeader = header.some((cell) => /дата|сумм|описан|назнач|категор/.test(cell));
  const body = hasHeader ? table.slice(1) : table;
  const dateIndex = hasHeader ? Math.max(header.findIndex((cell) => cell.includes("дата")), 0) : 0;
  const amountIndex = hasHeader ? Math.max(header.findIndex((cell) => cell.includes("сумм")), 0) : 1;
  const titleIndex = hasHeader
    ? (() => {
        const named = header.findIndex(
          (cell, index) =>
            index !== dateIndex && index !== amountIndex && /описан|назнач|коммент|получател|контрагент/.test(cell),
        );
        if (named >= 0) return named;
        const other = header.findIndex((cell, index) => index !== dateIndex && index !== amountIndex);
        return other >= 0 ? other : 2;
      })()
    : 2;
  return body
    .flatMap((cells) => {
      const rawAmount = (cells[amountIndex] ?? "").replace(/\s/g, "").replace(",", ".");
      const amount = Number(rawAmount);
      if (!rawAmount || !Number.isFinite(amount) || amount === 0) return [];
      const title = (cells[titleIndex] || "Операция из выписки").replace(/^"|"$/g, "");
      const expense = amount < 0;
      return [
        {
          date: statementDate(cells[dateIndex] ?? ""),
          title,
          kind: expense ? ("expense" as const) : ("income" as const),
          category: expense ? "Другое" : /зарплат/i.test(title) ? "Стабильный" : "Пассивный",
          amount: Math.abs(amount),
        },
      ];
    })
    .slice(0, 200);
}

type ChartDay = { month: number; day: number };

const chartMonthLength = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function chartDays(start: ChartDay, end: ChartDay) {
  const days: ChartDay[] = [];
  let month = start.month;
  let day = start.day;
  while (month < end.month || (month === end.month && day <= end.day)) {
    days.push({ month, day });
    day += 1;
    if (day > chartMonthLength[month]) {
      month += 1;
      day = 1;
    }
  }
  return days;
}

function cumulativeSeries(
  rows: LedgerRow[],
  kind: LedgerRow["kind"],
  start: ChartDay,
  end: ChartDay,
  until: ChartDay,
) {
  const totals = new Map<string, number>();
  for (const row of rows) {
    if (row.kind !== kind) continue;
    const [dayText, monthText] = row.date.split(" ");
    const month = statementMonths.indexOf(monthText) + 1;
    const day = Number(dayText);
    if (!month || !day) continue;
    const key = `${month}-${day}`;
    totals.set(key, (totals.get(key) ?? 0) + row.amount);
  }
  let sum = 0;
  let open = true;
  return chartDays(start, end).map((item) => {
    if (!open) return null;
    sum += totals.get(`${item.month}-${item.day}`) ?? 0;
    if (item.month === until.month && item.day === until.day) open = false;
    return sum;
  });
}

function ratioSeries(income: Array<number | null>, expense: Array<number | null>) {
  return income.map((value, index) => {
    const spent = expense[index];
    if (value == null || spent == null) return null;
    if (spent <= 0) return value <= 0 ? 0 : null;
    return value / spent;
  });
}

function chartRatioLabel(value: number) {
  if (value <= 0) return "0";
  const rounded = Math.round(value * 10) / 10;
  return `${String(rounded).replace(".", ",")}×`;
}

function chartAxisLabel(value: number) {
  if (value >= 1000) {
    const compact = value / 1000;
    const rounded = compact >= 10 ? Math.round(compact) : Math.round(compact * 10) / 10;
    return `${String(rounded).replace(".", ",")}к`;
  }
  return new Intl.NumberFormat("ru-RU").format(Math.round(value));
}

function niceChartMax(value: number) {
  if (value <= 0) return 1000;
  const power = 10 ** Math.floor(Math.log10(value));
  const step = power / 2;
  return Math.ceil(value / step) * step;
}

function chartGeometry(values: Array<number | null>, max: number, domain: number) {
  const width = 700;
  const top = 16;
  const height = 140;
  const points = values.flatMap((value, index) => {
    if (value == null) return [];
    const x = domain <= 1 ? 0 : (index / (domain - 1)) * width;
    const y = top + height - (value / max) * height;
    return [{ x, y }];
  });
  if (!points.length) return { line: "", area: "", end: null as { x: number; y: number } | null };
  const line = points
    .map((point, index) => `${index === 0 ? "M" : "L"}${point.x.toFixed(1)} ${point.y.toFixed(1)}`)
    .join(" ");
  const first = points[0];
  const last = points[points.length - 1];
  const area =
    points.length > 1
      ? `${line} L${last.x.toFixed(1)} ${top + height} L${first.x.toFixed(1)} ${top + height} Z`
      : "";
  return { line, area, end: last };
}

function BudgetPage({ toast }: { toast: (text: string) => void }) {
  const [rows, setRows] = useState<LedgerRow[]>([
    { id: 1, date: "5 июн", title: "Дивиденды", kind: "income", category: "Пассивный", amount: 8600 },
    { id: 2, date: "12 июн", title: "Проценты по вкладу", kind: "income", category: "Пассивный", amount: 4200 },
    { id: 10, date: "16 июн", title: "Зарплата", kind: "income", category: "Стабильный", amount: 245000 },
    { id: 11, date: "16 июн", title: "The Lumiares", kind: "expense", category: "Жильё", amount: 32400 },
    { id: 12, date: "15 июн", title: "Continente", kind: "expense", category: "Еда", amount: 4820 },
    { id: 13, date: "15 июн", title: "Lisboa Bikes", kind: "expense", category: "Транспорт", amount: 1400 },
    { id: 14, date: "12 июн", title: "Dear Breakfast", kind: "expense", category: "Еда", amount: 1240 },
    { id: 15, date: "8 июн", title: "Second Home", kind: "expense", category: "Работа", amount: 4000 },
    { id: 16, date: "10 мая", title: "Проценты по вкладу", kind: "income", category: "Пассивный", amount: 3900 },
    { id: 17, date: "18 мая", title: "Зарплата", kind: "income", category: "Стабильный", amount: 245000 },
    { id: 18, date: "12 мая", title: "Перелёт", kind: "expense", category: "Транспорт", amount: 28600 },
    { id: 19, date: "2 июн", title: "Аренда, май", kind: "expense", category: "Жильё", amount: 62000 },
    { id: 20, date: "4 апр", title: "Жильё, апрель", kind: "expense", category: "Жильё", amount: 58000 },
  ]);
  const [adding, setAdding] = useState(false);
  const [entryKind, setEntryKind] = useState<"income" | "expense">("income");
  const [entryCategory, setEntryCategory] = useState("Пассивный");
  const [entryTitle, setEntryTitle] = useState("");
  const [entryAmount, setEntryAmount] = useState("");
  const [bankOpen, setBankOpen] = useState(false);
  const [statementBank, setStatementBank] = useState<(typeof statementBanks)[number] | null>(null);
  const [statementFile, setStatementFile] = useState("");
  const statementInput = useRef<HTMLInputElement>(null);
  const [chartKind, setChartKind] = useState<"ratio" | LedgerRow["kind"]>("ratio");
  const [chartSpan, setChartSpan] = useState<"week" | "month" | "quarter">("month");

  const ledger = [...rows].sort((left, right) => right.id - left.id);
  const stableNow = sumRows(
    rows.filter((row) => row.category === "Стабильный"),
    "income",
    "июн",
    budgetToday,
  );
  const passiveNow = sumRows(
    rows.filter((row) => row.category === "Пассивный"),
    "income",
    "июн",
    budgetToday,
  );
  const incomeNow = stableNow + passiveNow;
  const incomeThen = sumRows(rows, "income", "мая", budgetToday);
  const expenseMonth = sumRows(rows, "expense", "июн", budgetToday);
  const expenseWeek = rows.reduce((sum, row) => {
    if (row.kind !== "expense" || ledgerMonth(row.date) !== "июн") return sum;
    const day = ledgerDay(row.date);
    return day >= 16 && day <= 22 ? sum + row.amount : sum;
  }, 0);
  const expenseQuarter = sumRows(rows, "expense");
  const expenseThen = sumRows(rows, "expense", "мая", budgetToday);
  const incomeDelta = incomeNow - incomeThen;
  const expenseDelta = expenseMonth - expenseThen;
  const chartToday = { month: 6, day: 16 };
  const chartWindow =
    chartSpan === "week"
      ? {
          current: { start: { month: 6, day: 16 }, end: { month: 6, day: 22 }, until: chartToday },
          previous: { start: { month: 6, day: 9 }, end: { month: 6, day: 15 }, until: { month: 6, day: 15 } },
          currentLabel: "16–22 июня",
          previousLabel: "9–15 июня",
          overline: "НЕДЕЛЯ",
        }
      : chartSpan === "quarter"
        ? {
            current: { start: { month: 4, day: 1 }, end: { month: 6, day: 30 }, until: chartToday },
            previous: { start: { month: 1, day: 1 }, end: { month: 3, day: 31 }, until: { month: 3, day: 31 } },
            currentLabel: "Апрель — июнь",
            previousLabel: "Январь — март",
            overline: "3 МЕСЯЦА",
          }
        : {
            current: { start: { month: 6, day: 1 }, end: { month: 6, day: 30 }, until: chartToday },
            previous: { start: { month: 5, day: 1 }, end: { month: 5, day: 31 }, until: { month: 5, day: 31 } },
            currentLabel: "Июнь",
            previousLabel: "Май",
            overline: "МЕСЯЦ",
          };
  const chartDomain = Math.max(
    chartDays(chartWindow.current.start, chartWindow.current.end).length,
    chartDays(chartWindow.previous.start, chartWindow.previous.end).length,
  );
  const chartCurrent =
    chartKind === "ratio"
      ? ratioSeries(
          cumulativeSeries(rows, "income", chartWindow.current.start, chartWindow.current.end, chartWindow.current.until),
          cumulativeSeries(rows, "expense", chartWindow.current.start, chartWindow.current.end, chartWindow.current.until),
        )
      : cumulativeSeries(rows, chartKind, chartWindow.current.start, chartWindow.current.end, chartWindow.current.until);
  const chartPrevious =
    chartKind === "ratio"
      ? ratioSeries(
          cumulativeSeries(rows, "income", chartWindow.previous.start, chartWindow.previous.end, chartWindow.previous.until),
          cumulativeSeries(rows, "expense", chartWindow.previous.start, chartWindow.previous.end, chartWindow.previous.until),
        )
      : cumulativeSeries(rows, chartKind, chartWindow.previous.start, chartWindow.previous.end, chartWindow.previous.until);
  const chartMax = niceChartMax(
    Math.max(0, ...chartCurrent.filter((value): value is number => value != null), ...chartPrevious.filter((value): value is number => value != null)),
  );
  const chartNow = chartGeometry(chartCurrent, chartMax, chartDomain);
  const chartThen = chartGeometry(chartPrevious, chartMax, chartDomain);
  const chartColor = chartKind === "income" ? "#2f6b4f" : chartKind === "ratio" ? "#355f78" : "#c46a3a";
  const chartScale = chartKind === "ratio" ? chartRatioLabel : chartAxisLabel;
  const chartParity = chartKind === "ratio" && chartMax > 1 ? 16 + 140 - (1 / chartMax) * 140 : null;
  const chartTicks =
    chartSpan === "week"
      ? ["16", "17", "18", "19", "20", "21", "22"].map((label, index) => ({
          label,
          at: index / (chartDomain - 1),
        }))
      : chartSpan === "quarter"
        ? [
            { label: "Апр", at: 0 },
            { label: "Май", at: 30 / (chartDomain - 1) },
            { label: "Июн", at: 61 / (chartDomain - 1) },
          ]
        : [1, 8, 16, 24, 30].map((day) => ({
            label: day === 1 ? "1 июн" : String(day),
            at: (day - 1) / (chartDomain - 1),
          }));

  function openEntry(kind: "income" | "expense") {
    if (adding && entryKind === kind) {
      setAdding(false);
      return;
    }
    setEntryKind(kind);
    setEntryCategory(kind === "income" ? "Пассивный" : "Еда");
    setEntryTitle("");
    setEntryAmount("");
    setAdding(true);
  }

  function saveEntry() {
    const amount = Number(entryAmount.replace(/\s/g, "").replace(",", "."));
    if (!entryTitle.trim() || !Number.isFinite(amount) || amount <= 0) return;
    setRows((current) => [
      {
        id: Date.now(),
        date: "16 июн",
        title: entryTitle.trim(),
        kind: entryKind,
        category: entryCategory,
        amount,
      },
      ...current,
    ]);
    setEntryTitle("");
    setEntryAmount("");
    setAdding(false);
    toast(entryKind === "income" ? "Доход внесён" : "Расход внесён");
  }

  useEffect(() => {
    if (!bankOpen && !adding) return;
    const close = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setBankOpen(false);
      setAdding(false);
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [bankOpen, adding]);

  async function importStatement(file: File) {
    if (!statementBank) {
      setBankOpen(true);
      return;
    }
    setStatementFile(file.name);
    const extension = file.name.split(".").pop()?.toLowerCase();
    if (extension !== "csv" && extension !== "txt") {
      toast(`${statementBank.name}: файл ${file.name} принят`);
      return;
    }
    const parsed = parseStatement(await file.text());
    if (!parsed.length) {
      toast("В CSV не нашлось строк с датой и суммой");
      return;
    }
    setRows((current) => [
      ...parsed.map((row, index) => ({ ...row, id: Date.now() + index })),
      ...current,
    ]);
    toast(`${statementBank.name}: ${parsed.length} операций из выписки`);
  }

  function removeRow(row: LedgerRow) {
    setRows((current) => current.filter((item) => item.id !== row.id));
    toast(`${row.title} удалено из таблицы`);
  }

  return (
    <div className="section-page">
      <PageTitle
        label="ФИНАНСЫ · ИЮНЬ"
        title="Бюджет"
        description="Доход и расход на сегодня, динамика месяца и сравнение с тем же числом в мае."
      />

      <div className="income-board">
        <article className="panel income-card">
          <div className="income-card-head">
            <span className="overline">ТЕКУЩИЙ ДОХОД</span>
            <button className="primary entry-income" onClick={() => openEntry("income")}>
              Внести <Icon name="plus" size={15} />
            </button>
          </div>
          <strong>{formatMoney(incomeNow)}</strong>
          <p>На 16 июня: стабильный и пассивный.</p>
          <ul>
            <li>
              <span>Стабильный</span>
              <b>{formatMoney(stableNow)}</b>
            </li>
            <li>
              <span>Пассивный</span>
              <b>{formatMoney(passiveNow)}</b>
            </li>
          </ul>
        </article>

        <article className="panel income-card expense-now">
          <div className="income-card-head">
            <span className="overline">ТЕКУЩИЙ РАСХОД</span>
            <button className="primary entry-expense" onClick={() => openEntry("expense")}>
              Внести <Icon name="plus" size={15} />
            </button>
          </div>
          <strong>{formatMoney(expenseMonth)}</strong>
          <p>С 1 по 16 июня.</p>
          <ul>
            <li>
              <span>За месяц</span>
              <b>{formatMoney(expenseMonth)}</b>
            </li>
            <li>
              <span>За неделю</span>
              <b>{formatMoney(expenseWeek)}</b>
            </li>
            <li>
              <span>За 3 месяца</span>
              <b>{formatMoney(expenseQuarter)}</b>
            </li>
          </ul>
        </article>
      </div>

      {adding && (
        <div className="modal-backdrop" onMouseDown={() => setAdding(false)}>
          <form
            className={`modal entry-modal ${entryKind}`}
            onMouseDown={(event) => event.stopPropagation()}
            onSubmit={(event) => {
              event.preventDefault();
              saveEntry();
            }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="entry-title"
          >
            <button type="button" className="icon-button modal-close" onClick={() => setAdding(false)} aria-label="Закрыть">
              <Icon name="close" />
            </button>
            <div className={`modal-mark ${entryKind}`}>
              <Icon name={entryKind === "income" ? "wallet" : "shopping"} size={22} />
            </div>
            <p className="eyebrow">{entryKind === "income" ? "ДОХОД · 16 ИЮНЯ" : "РАСХОД · 16 ИЮНЯ"}</p>
            <h2 id="entry-title">{entryKind === "income" ? "Внести доход" : "Внести расход"}</h2>
            <p className="modal-subtitle">
              {entryKind === "income"
                ? "Сумма встанет в стабильный или пассивный доход и появится в таблице."
                : "Сумма войдёт в месяц, неделю и три месяца и появится в таблице."}
            </p>
            <div className="entry-categories" role="group" aria-label="Категория">
              {(entryKind === "income"
                ? ["Стабильный", "Пассивный"]
                : ["Жильё", "Еда", "Транспорт", "Работа", "Другое"]
              ).map((item) => (
                <button
                  key={item}
                  type="button"
                  className={entryCategory === item ? "active" : ""}
                  onClick={() => setEntryCategory(item)}
                >
                  {item}
                </button>
              ))}
            </div>
            <label className="entry-field">
              <span className="field-label">{entryKind === "income" ? "Источник" : "На что"}</span>
              <input
                value={entryTitle}
                onChange={(event) => setEntryTitle(event.target.value)}
                placeholder={entryKind === "income" ? "Дивиденды, кэшбэк…" : "Кафе, аренда…"}
                aria-label="Название операции"
                autoFocus
              />
            </label>
            <label className="entry-field">
              <span className="field-label">Сумма, ₽</span>
              <input
                className="entry-amount"
                value={entryAmount}
                onChange={(event) => setEntryAmount(event.target.value)}
                placeholder="0"
                inputMode="decimal"
                aria-label="Сумма"
              />
            </label>
            <button
              className={entryKind === "income" ? "primary wide entry-income" : "primary wide entry-expense"}
              type="submit"
            >
              Добавить <Icon name="check" size={17} />
            </button>
          </form>
        </div>
      )}

      <article className="panel workspace-panel chart-panel">
        <div className="workspace-head">
          <div>
            <span className="overline">{chartWindow.overline}</span>
            <h3>Динамика</h3>
          </div>
          <div className="chart-toolbar">
            <div className="segmented" role="group" aria-label="Что показать">
              <button
                className={chartKind === "ratio" ? "active-ratio" : ""}
                onClick={() => setChartKind("ratio")}
              >
                Доход / расход
              </button>
              <button
                className={chartKind === "expense" ? "active-expense" : ""}
                onClick={() => setChartKind("expense")}
              >
                Расход
              </button>
              <button
                className={chartKind === "income" ? "active-income" : ""}
                onClick={() => setChartKind("income")}
              >
                Доход
              </button>
            </div>
            <div className="segmented" role="group" aria-label="Период">
              {(
                [
                  ["week", "Неделя"],
                  ["month", "Месяц"],
                  ["quarter", "3 месяца"],
                ] as const
              ).map(([span, label]) => (
                <button
                  key={span}
                  className={chartSpan === span ? "active" : ""}
                  onClick={() => setChartSpan(span)}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="chart-legend">
          <span>
            <i className="solid" style={{ background: chartColor }} /> {chartWindow.currentLabel}
          </span>
          <span>
            <i className="dashed" style={{ borderColor: chartColor }} /> {chartWindow.previousLabel}
          </span>
          {chartKind === "ratio" && <span className="chart-ratio-note">Доход на 1 ₽ расхода. Серая линия — паритет.</span>}
        </div>
        <div className="balance-chart">
          <div className="chart-scale">
            <span>{chartScale(chartMax)}</span>
            <span>{chartScale(chartMax / 2)}</span>
            <span>0</span>
          </div>
          <svg viewBox="0 0 700 168" role="img" aria-label={`Динамика: ${chartWindow.currentLabel} и ${chartWindow.previousLabel}`}>
            <defs>
              <linearGradient id="chart-area" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor={chartColor} stopOpacity=".22" />
                <stop offset="1" stopColor={chartColor} stopOpacity="0" />
              </linearGradient>
            </defs>
            <path className="chart-grid-line" d="M0 16H700M0 86H700M0 156H700" />
            {chartParity != null && <path className="chart-parity" d={`M0 ${chartParity.toFixed(1)}H700`} />}
            {chartThen.line && <path className="chart-compare" d={chartThen.line} stroke={chartColor} />}
            {chartNow.area && <path d={chartNow.area} fill="url(#chart-area)" />}
            {chartNow.line && <path className="chart-current" d={chartNow.line} stroke={chartColor} />}
            {chartNow.end && <circle cx={chartNow.end.x} cy={chartNow.end.y} r="3.5" fill={chartColor} />}
          </svg>
          <div className="chart-days chart-days-plot">
            {chartTicks.map((tick) => (
              <span key={tick.label} style={{ left: `${tick.at * 100}%` }}>
                {tick.label}
              </span>
            ))}
          </div>
        </div>
      </article>

      <article className="panel month-compare">
        <div>
          <span className="overline">НА 16 ИЮНЯ</span>
          <h3>Сравнение с прошлым месяцем</h3>
          <p>Те же числа: 1–16 июня против 1–16 мая.</p>
        </div>
        <div className="compare-metrics">
          <div>
            <span>Доход</span>
            <strong className={incomeDelta >= 0 ? "sum-in" : "sum-out"}>
              {incomeDelta >= 0 ? "+" : "−"} {formatMoney(Math.abs(incomeDelta))}
            </strong>
            <small>
              {formatMoney(incomeNow)} сейчас · {formatMoney(incomeThen)} в мае
            </small>
          </div>
          <div>
            <span>Расход</span>
            <strong className={expenseDelta <= 0 ? "sum-in" : "sum-out"}>
              {expenseDelta >= 0 ? "+" : "−"} {formatMoney(Math.abs(expenseDelta))}
            </strong>
            <small>
              {formatMoney(expenseMonth)} сейчас · {formatMoney(expenseThen)} в мае
            </small>
          </div>
        </div>
      </article>

      <article className="panel ledger-panel">
        <div className="workspace-head">
          <div>
            <span className="overline">ОПЕРАЦИИ</span>
            <h3>Расходы и доходы</h3>
          </div>
        </div>
        <div className="ledger-scroll">
          <table className="ledger">
            <thead>
              <tr>
                <th>Дата</th>
                <th>Операция</th>
                <th>Тип</th>
                <th>Категория</th>
                <th>Сумма</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {ledger.map((row) => (
                <tr key={row.id}>
                  <td>{row.date}</td>
                  <td>{row.title}</td>
                  <td>
                    <span className={row.kind === "income" ? "ledger-in" : "ledger-out"}>
                      {row.kind === "income" ? "Доход" : "Расход"}
                    </span>
                  </td>
                  <td>{row.category}</td>
                  <td className={row.kind === "income" ? "sum-in" : "sum-out"}>
                    {row.kind === "income" ? "+" : "−"} {formatMoney(row.amount)}
                  </td>
                  <td>
                    <button
                      className="ledger-delete"
                      onClick={() => removeRow(row)}
                      aria-label={`Удалить ${row.title}`}
                    >
                      <Icon name="close" size={14} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </article>

      <article className="panel statement-import">
        <div>
          <span className="overline">ВЫПИСКА</span>
          <h3>Импорт из банка</h3>
          <p>CSV, XLS или XLSX. Сначала выберите банк, затем загрузите файл. Строки CSV с датой и суммой попадут в таблицу.</p>
          {statementFile && (
            <p className="statement-file">
              {statementBank?.name} · {statementFile}
            </p>
          )}
        </div>
        <div className="statement-actions">
          <button type="button" className="statement-bank" onClick={() => setBankOpen(true)}>
            {statementBank ? <BankLogo id={statementBank.id} /> : <span className="bank-logo bank-empty">?</span>}
            <span>{statementBank ? statementBank.name : "Выбрать банк"}</span>
          </button>
          <button
            type="button"
            className="primary"
            onClick={() => (statementBank ? statementInput.current?.click() : setBankOpen(true))}
          >
            Загрузить файл
          </button>
          <input
            ref={statementInput}
            type="file"
            accept=".csv,.xls,.xlsx,text/csv"
            hidden
            onChange={(event) => {
              const file = event.target.files?.[0];
              event.target.value = "";
              if (file) void importStatement(file);
            }}
          />
        </div>
      </article>

      {bankOpen && (
        <div className="modal-backdrop" onMouseDown={() => setBankOpen(false)}>
          <div
            className="modal statement-modal"
            onMouseDown={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="bank-picker-title"
          >
            <button className="icon-button modal-close" onClick={() => setBankOpen(false)} aria-label="Закрыть">
              <Icon name="close" />
            </button>
            <p className="eyebrow">БАНКИ РОССИИ</p>
            <h2 id="bank-picker-title">Откуда выписка</h2>
            <p className="modal-subtitle">CSV, XLS или XLSX. Формат колонок зависит от банка.</p>
            <div className="bank-grid">
              {statementBanks.map((bank) => (
                <button
                  key={bank.id}
                  className={statementBank?.id === bank.id ? "active" : ""}
                  onClick={() => {
                    setStatementBank(bank);
                    setBankOpen(false);
                  }}
                >
                  <BankLogo id={bank.id} />
                  <span>{bank.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

type PlanStep = {
  id: string;
  title: string;
  done: boolean;
  start: string;
  deadline: string;
  tone: string;
  icon: IconName;
};

const prepOrigin = new Date(2026, 5, 16);
const prepWeeks = 13;
const prepWeekDates = Array.from({ length: prepWeeks }, (_, index) => {
  const date = new Date(prepOrigin);
  date.setDate(prepOrigin.getDate() + index * 7);
  return date;
});
const prepMonths = ["янв", "фев", "мар", "апр", "мая", "июн", "июл", "авг", "сен", "окт", "ноя", "дек"];

function prepDate(iso: string) {
  const [year, month, day] = iso.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function prepWeekIndex(iso: string) {
  const diff = Math.round((prepDate(iso).getTime() - prepOrigin.getTime()) / 86400000);
  return Math.min(prepWeeks - 1, Math.max(0, Math.floor(diff / 7)));
}

function prepLabel(iso: string) {
  const date = prepDate(iso);
  return `${date.getDate()} ${prepMonths[date.getMonth()]}`;
}

type PlanPlace = {
  id: string;
  title: string;
  address: string;
  contact: string;
  note: string;
  lat: number | null;
  lng: number | null;
};

type PlanFile = {
  id: string;
  name: string;
  size: number;
  kind: string;
  url: string;
};

const tripChat = [
  { author: "Марина", time: "11:04", text: "Жильё в Рейкьявике подтвердили. Код приедет за день до заезда." },
  { author: "Игорь", time: "11:18", text: "Билеты положил в файлы плана. Обратный рейс 23 сентября, 18:40." },
  { author: "Софья", time: "12:02", text: "На юге сильный ветер. Утром сверимся с road.is." },
];

function fileSize(bytes: number) {
  if (bytes < 1024) return `${bytes} Б`;
  if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} КБ`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} МБ`;
}

function mapEmbed(place: PlanPlace) {
  if (place.lat == null || place.lng == null) return "";
  const pad = 0.12;
  const bbox = [place.lng - pad, place.lat - pad, place.lng + pad, place.lat + pad].join(",");
  return `https://www.openstreetmap.org/export/embed.html?bbox=${encodeURIComponent(bbox)}&layer=mapnik&marker=${place.lat}%2C${place.lng}`;
}

function prepBar(step: PlanStep) {
  const from = Math.min(prepWeekIndex(step.start), prepWeekIndex(step.deadline));
  const to = Math.max(prepWeekIndex(step.start), prepWeekIndex(step.deadline));
  return { column: from + 1, span: to - from + 1 };
}

const templateStops = [
  { days: "1–2", title: "Рейкьявик" },
  { days: "3–4", title: "Золотое кольцо" },
  { days: "5–7", title: "Южное побережье" },
  { days: "8–9", title: "Ледник" },
  { days: "10–12", title: "Север и возвращение" },
];
const templatePeople = ["Алексей · организатор", "Марина · маршрут", "Игорь · бюджет", "Софья · жильё"];
const templateBudget = [
  { name: "Жильё", amount: 92000 },
  { name: "Автомобиль", amount: 74000 },
  { name: "Еда", amount: 48000 },
  { name: "Активности", amount: 46000 },
];
const templateNotes = [
  "Прилёт, жильё в центре, прокат автомобиля",
  "Тингвеллир, Гейсир, Гюдльфосс",
  "Вик, Рейнисфьяра, Скоугафосс",
  "Прогулка по языку ледника, ночь в Хусафедле",
  "Акюрейри, кольцевая дорога, вылет",
];
const templateLinks = [
  { id: "road", title: "Дороги Исландии", url: "https://www.road.is", note: "Закрытия трасс перед выездом на юг" },
  { id: "weather", title: "Погода", url: "https://vedur.is", note: "Ветер на побережье сильнее прогноза в городе" },
];
const templateContacts = [
  { id: "car", name: "Blue Car Rental", value: "+354 770 0000", note: "Выдача в аэропорту KEF, бронь на Алексея" },
  { id: "stay", name: "Хозяин жилья в Рейкьявике", value: "+354 555 0142", note: "Заезд после 15:00" },
];
const coverIdeas = [
  {
    title: "Побережье",
    src: "https://images.unsplash.com/photo-1500043357865-c6b8827edf10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=85&w=900",
  },
  {
    title: "Город",
    src: "https://images.unsplash.com/photo-1525207934214-58e69a8f8a3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=85&w=900",
  },
  {
    title: "Горы",
    src: "https://images.unsplash.com/photo-1605641532626-5ab1dab56350?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=85&w=900",
  },
];

const templatePlaces: PlanPlace[] = [
  { id: "reykjavik", title: "Рейкьявик", address: "Laugavegur 12, Reykjavík", contact: "+354 555 0142", note: "Первые две ночи", lat: 64.1466, lng: -21.9426 },
  { id: "vik", title: "Вик", address: "Víkurbraut 26, Vík", contact: "hostel@vik.is", note: "Ночь у чёрного пляжа", lat: 63.4194, lng: -19.0064 },
  { id: "glacier", title: "Ледник", address: "Húsafell, Iceland", contact: "+354 435 1550", note: "Прогулка по языку ледника", lat: 64.699, lng: -20.87 },
];

const initialPlanSteps: PlanStep[] = [
  { id: "tickets", title: "Билеты туда и обратно", done: true, start: "2026-06-16", deadline: "2026-06-28", tone: "flight", icon: "plane" },
  { id: "car", title: "Автомобиль на 12 дней", done: true, start: "2026-06-16", deadline: "2026-06-20", tone: "transport", icon: "bike" },
  { id: "stay", title: "Жильё в Рейкьявике", done: true, start: "2026-06-16", deadline: "2026-07-05", tone: "stay", icon: "hotel" },
  { id: "ring", title: "Золотое кольцо", done: true, start: "2026-06-22", deadline: "2026-07-12", tone: "event", icon: "sparkle" },
  { id: "vik", title: "Ночь в Вике", done: true, start: "2026-06-25", deadline: "2026-07-19", tone: "stay", icon: "hotel" },
  { id: "glacier", title: "Ночь у ледника", done: false, start: "2026-07-01", deadline: "2026-08-02", tone: "stay", icon: "hotel" },
  { id: "insurance", title: "Страховка путешествия", done: false, start: "2026-07-06", deadline: "2026-08-15", tone: "work", icon: "file" },
  { id: "gear", title: "Экипировка", done: false, start: "2026-07-20", deadline: "2026-08-20", tone: "equipment", icon: "shopping" },
  { id: "license", title: "Международные права", done: true, start: "2026-06-16", deadline: "2026-07-01", tone: "work", icon: "file" },
  { id: "sim", title: "Связь на острове", done: true, start: "2026-08-01", deadline: "2026-08-25", tone: "planned", icon: "link" },
  { id: "fund", title: "Общий фонд", done: true, start: "2026-06-16", deadline: "2026-07-10", tone: "event", icon: "wallet" },
  { id: "aid", title: "Список аптеки", done: false, start: "2026-08-10", deadline: "2026-09-05", tone: "equipment", icon: "plus" },
];

function EventsPage({ plan, toast }: { plan: () => void; toast: (text: string) => void }) {
  const [cardSteps, setCardSteps] = useState(initialPlanSteps);
  const [steps, setSteps] = useState(initialPlanSteps);
  const [saved, setSaved] = useState(186000);
  const [budgetLines, setBudgetLines] = useState(templateBudget);
  const [routeNotes, setRouteNotes] = useState(templateNotes);
  const [stops, setStops] = useState(templateStops);
  const [people, setPeople] = useState(templatePeople);
  const [tripTitle, setTripTitle] = useState("Road trip по Исландии");
  const [tripKicker, setTripKicker] = useState("ГЛАВНОЕ СОБЫТИЕ · СЕНТЯБРЬ");
  const [tripSummary, setTripSummary] = useState("12–23 сентября · 4 участника · вылет из Лиссабона");
  const [tripDuration, setTripDuration] = useState("12 дней");
  const [planKind, setPlanKind] = useState<"template" | "fresh">("template");
  const [cover, setCover] = useState<string | null>(null);
  const [aiOpen, setAiOpen] = useState(false);
  const [aiBusy, setAiBusy] = useState(false);
  const [savedTrip, setSavedTrip] = useState<{
    title: string;
    summary: string;
    cover: string | null;
    progress: number;
    done: number;
    total: number;
    saved: number;
    duration: string;
    saving: boolean;
  } | null>(null);
  const [needsSaving, setNeedsSaving] = useState(true);
  const [savingAsk, setSavingAsk] = useState(false);
  const [contribution, setContribution] = useState("");
  const [createOpen, setCreateOpen] = useState(false);
  const [planOpen, setPlanOpen] = useState(false);
  const [planReady, setPlanReady] = useState(false);
  const [eventSeconds, setEventSeconds] = useState(() => {
    const eventAt = new Date(2026, 8, 12, 9, 0, 0).getTime();
    const demoNow = new Date(2026, 5, 16, 9, 24, 18).getTime();
    return Math.max(0, Math.floor((eventAt - demoNow) / 1000));
  });
  const nextStep = useRef(13);
  const kitSeq = useRef(1);
  const daysLeft = Math.floor(eventSeconds / 86400);
  const [links, setLinks] = useState(templateLinks);
  const [contacts, setContacts] = useState(templateContacts);
  const [places, setPlaces] = useState<PlanPlace[]>(templatePlaces);
  const [files, setFiles] = useState<PlanFile[]>([]);
  const [mapId, setMapId] = useState("reykjavik");
  const [previewId, setPreviewId] = useState<string | null>(null);
  const [telegram, setTelegram] = useState<string | null>(null);
  const [telegramDraft, setTelegramDraft] = useState("");
  const [telegramOpen, setTelegramOpen] = useState(false);
  const [linkDraft, setLinkDraft] = useState({ title: "", url: "", note: "" });
  const [contactDraft, setContactDraft] = useState({ name: "", value: "", note: "" });
  const [placeDraft, setPlaceDraft] = useState({ title: "", address: "", contact: "", note: "" });
  const [linkForm, setLinkForm] = useState(false);
  const [contactForm, setContactForm] = useState(false);
  const [placeForm, setPlaceForm] = useState(false);
  const mappedPlace = places.find((place) => place.id === mapId) ?? places[0];
  const previewFile = files.find((file) => file.id === previewId) ?? null;
  const doneCount = steps.filter((step) => step.done).length;
  const prepProgress = steps.length ? Math.round((doneCount / steps.length) * 100) : 0;
  const cardDone = cardSteps.filter((step) => step.done).length;
  const cardProgress = Math.round((cardDone / cardSteps.length) * 100);
  const budgetTotal = budgetLines.reduce((sum, line) => sum + (Number(line.amount) || 0), 0);
  const nearestSteps = [...cardSteps]
    .sort((a, b) => Number(a.done) - Number(b.done) || a.deadline.localeCompare(b.deadline))
    .slice(0, 4);
  const openTitles = steps.filter((step) => !step.done).map((step) => step.title);
  const prepNote = steps.length === 0
    ? "Добавьте шаги подготовки, сроки и материалы."
    : openTitles.length
      ? `Осталось закрыть: ${openTitles.slice(0, 3).join(", ")}.`
      : "Все шаги подготовки закрыты.";

  function patchStep(id: string, patch: Partial<PlanStep>) {
    setSteps((list) => list.map((step) => (step.id === id ? { ...step, ...patch } : step)));
  }

  function openPlan(kind: "template" | "fresh") {
    setFiles((list) => {
      list.forEach((file) => URL.revokeObjectURL(file.url));
      return [];
    });
    setPlanKind(kind);
    setPreviewId(null);
    setTelegram(null);
    setTelegramDraft("");
    setTelegramOpen(false);
    setLinkForm(false);
    setContactForm(false);
    setPlaceForm(false);
    setLinkDraft({ title: "", url: "", note: "" });
    setContactDraft({ name: "", value: "", note: "" });
    setPlaceDraft({ title: "", address: "", contact: "", note: "" });
    setAiOpen(false);
    setAiBusy(false);
    setCover((current) => {
      if (current?.startsWith("blob:")) URL.revokeObjectURL(current);
      return null;
    });
    if (kind === "template") {
      setNeedsSaving(true);
      setSteps(initialPlanSteps);
      setSaved(186000);
      setBudgetLines(templateBudget);
      setRouteNotes(templateNotes);
      setStops(templateStops);
      setPeople(templatePeople);
      setLinks(templateLinks);
      setContacts(templateContacts);
      setPlaces(templatePlaces);
      setMapId("reykjavik");
      setTripTitle("Road trip по Исландии");
      setTripKicker("ГЛАВНОЕ СОБЫТИЕ · СЕНТЯБРЬ");
      setTripSummary("12–23 сентября · 4 участника · вылет из Лиссабона");
      setTripDuration("12 дней");
    } else {
      setSteps([]);
      setSaved(0);
      setBudgetLines(templateBudget.map((line) => ({ ...line, amount: 0 })));
      setRouteNotes([""]);
      setStops([{ days: "", title: "" }]);
      setPeople([""]);
      setLinks([]);
      setContacts([]);
      setPlaces([]);
      setMapId("");
      setTripTitle("");
      setTripKicker("НОВОЕ ПУТЕШЕСТВИЕ");
      setTripSummary("");
      setTripDuration("");
    }
    setCreateOpen(false);
    setPlanReady(false);
    setPlanOpen(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function useCover(next: string) {
    setCover((current) => {
      if (current?.startsWith("blob:")) URL.revokeObjectURL(current);
      return next;
    });
    setAiOpen(false);
  }

  function saveTrip() {
    if (!tripTitle.trim()) return;
    setSavedTrip({
      title: tripTitle.trim(),
      summary: tripSummary.trim() || tripDuration.trim() || "Новое путешествие",
      cover,
      progress: prepProgress,
      done: doneCount,
      total: steps.length,
      saved,
      duration: tripDuration.trim(),
      saving: needsSaving,
    });
    setCardSteps(steps);
    setPlanOpen(false);
    toast("Путешествие сохранено");
  }
  const createItems = [
    ["sparkle", "Событие", "Встреча, дата или чек-лист"],
    ["plane", "Путешествие", "Маршрут, даты и бюджет поездки"],
    ["wallet", "Цель", "Накопление или результат"],
  ] as const;

  useEffect(() => {
    const timer = window.setInterval(() => setEventSeconds((value) => Math.max(0, value - 1)), 1000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!planOpen) return;
    const timer = window.setTimeout(() => setPlanReady(true), 700);
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") setPlanOpen(false);
    };
    window.addEventListener("keydown", close);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("keydown", close);
    };
  }, [planOpen]);

  return (
    <div className="section-page">
      <PageTitle
        label="ПЛАНЫ И ВПЕЧАТЛЕНИЯ"
        title="Цели и события"
        description="Превращайте большие планы в понятные шаги, сроки и бюджеты."
        action={
          <div className="planner-wrap">
            <button
              className={`primary page-action planner-button ${createOpen ? "open" : ""}`}
              aria-expanded={createOpen}
              aria-haspopup="menu"
              onClick={() => setCreateOpen((open) => !open)}
            >
              Создать <Icon name="plus" size={17} />
            </button>
            {createOpen && (
              <>
                <button className="popover-dismiss" aria-label="Закрыть меню" onClick={() => setCreateOpen(false)} />
                <div className="planner-pop create-pop" role="menu">
                  {createItems.map(([icon, title, note]) => (
                    <button
                      key={title}
                      role="menuitem"
                      onClick={() => {
                        if (title === "Путешествие") {
                          setCreateOpen(false);
                          setSavingAsk(true);
                          return;
                        }
                        setCreateOpen(false);
                        toast(title);
                      }}
                    >
                      <span>
                        <Icon name={icon} size={17} />
                      </span>
                      <strong>
                        {title}
                        <small>{note}</small>
                      </strong>
                      <Icon name="chevron" size={15} />
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        }
      />
      <article className="event-feature panel">
        <img
          src={
            savedTrip?.cover ||
            "https://images.unsplash.com/photo-1500043357865-c6b8827edf10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=85&w=1400"
          }
          alt={savedTrip?.title || "Побережье Исландии"}
        />
        <div className="event-shade">
          <div className="event-clock">
            <span>ДО СОБЫТИЯ</span>
            <BookingCountdown seconds={eventSeconds} />
          </div>
        </div>
        <div className="event-copy">
          {savedTrip ? null : <span className="template-badge">Шаблон путешествия</span>}
          <span className="overline">{savedTrip ? "ПУТЕШЕСТВИЕ" : "ГЛАВНОЕ СОБЫТИЕ · СЕНТЯБРЬ"}</span>
          <h2>{savedTrip?.title || "Road trip по Исландии"}</h2>
          <p>
            {savedTrip
              ? `${savedTrip.summary} · подготовка на ${savedTrip.progress}%`
              : `12 дней · 4 участника · подготовка на ${cardProgress}%`}
          </p>
          <div className="event-progress">
            <i>
              <em style={{ width: `${savedTrip ? savedTrip.progress : cardProgress}%` }} />
            </i>
            <span>{savedTrip ? savedTrip.progress : cardProgress}%</span>
          </div>
        </div>
        <div className="event-stats">
          <div>
            <span>До события</span>
            <strong>{daysLeft} дней</strong>
          </div>
          <div>
            <span>{savedTrip && !savedTrip.saving ? "Длительность" : "Накоплено"}</span>
            <strong>
              {savedTrip && !savedTrip.saving
                ? savedTrip.duration || "—"
                : formatMoney(savedTrip ? savedTrip.saved : 186000)}
            </strong>
          </div>
          <div>
            <span>Чек-лист</span>
            <strong>
              {savedTrip ? `${savedTrip.done} из ${savedTrip.total}` : `${cardDone} из ${cardSteps.length}`}
            </strong>
          </div>
          <button
            className="glass-button"
            onClick={() => {
              if (savedTrip) {
                setPlanKind("fresh");
                setPlanReady(false);
                setPlanOpen(true);
                return;
              }
              openPlan("template");
            }}
          >
            Открыть план <Icon name="arrow" size={17} />
          </button>
        </div>
      </article>
      <div className="section-grid events-layout">
        <article className="panel workspace-panel">
          <div className="workspace-head">
            <div>
              <span className="overline">БЛИЖАЙШИЕ ШАГИ</span>
              <h3>Чек-лист события</h3>
            </div>
            <span className="soft-badge">
              {cardDone} / {cardSteps.length}
            </span>
          </div>
          <div className="event-checklist">
            {nearestSteps.map((step) => (
              <button
                className={step.done ? "done" : ""}
                key={step.id}
                onClick={() =>
                  setCardSteps((list) =>
                    list.map((item) => (item.id === step.id ? { ...item, done: !item.done } : item)),
                  )
                }
              >
                <span className="task-check">{step.done && <Icon name="check" size={17} />}</span>
                <div>
                  <strong>{step.title}</strong>
                  <small>До {prepLabel(step.deadline)}</small>
                </div>
                <span className="soft-badge">{step.done ? "Готово" : "В работе"}</span>
              </button>
            ))}
          </div>
        </article>
        <article className="panel workspace-panel">
          <div className="workspace-head">
            <div>
              <span className="overline">ДРУГИЕ СОБЫТИЯ</span>
              <h3>На горизонте</h3>
            </div>
            <button className="round-plus" onClick={plan}>
              <Icon name="plus" size={17} />
            </button>
          </div>
          <div className="mini-events">
            <button onClick={() => toast("Событие «Переезд» открыто")}>
              <time>
                01<small>ОКТ</small>
              </time>
              <div>
                <strong>Переезд в Лиссабон</strong>
                <span>Подготовка · 34%</span>
                <i>
                  <em style={{ width: "34%" }} />
                </i>
              </div>
            </button>
            <button onClick={() => toast("Событие «Конференция» открыто")}>
              <time>
                16<small>НОЯ</small>
              </time>
              <div>
                <strong>Web Summit 2025</strong>
                <span>Билеты куплены</span>
                <i>
                  <em style={{ width: "60%" }} />
                </i>
              </div>
            </button>
          </div>
        </article>
      </div>
      {savingAsk && (
        <div className="saving-ask" role="dialog" aria-modal="true" aria-labelledby="saving-ask-title">
          <button className="popover-dismiss" aria-label="Закрыть вопрос" onClick={() => setSavingAsk(false)} />
          <article>
            <p className="eyebrow">ПЕРЕД СОЗДАНИЕМ</p>
            <h2 id="saving-ask-title">Нужно копить на это путешествие?</h2>
            <p>Если да, в плане можно вносить накопленную сумму. Бюджет поездки при этом остаётся отдельно.</p>
            <div className="saving-ask-actions">
              <button
                type="button"
                className="primary"
                onClick={() => {
                  setNeedsSaving(true);
                  setContribution("");
                  setSavingAsk(false);
                  openPlan("fresh");
                }}
              >
                Да, копить
              </button>
              <button
                type="button"
                onClick={() => {
                  setNeedsSaving(false);
                  setSavingAsk(false);
                  openPlan("fresh");
                }}
              >
                Нет
              </button>
            </div>
          </article>
        </div>
      )}
      {planOpen && (
        <div className="plan-layer" role="dialog" aria-modal="true" aria-labelledby="plan-title">
          <article className="plan-sheet">
            <header className="plan-sheet-head">
              <div>
                <span className={`plan-kind ${planKind}`}>
                  {planKind === "template" ? "Шаблон путешествия" : "Чистое путешествие"}
                </span>
                <span className="overline">{tripKicker}</span>
                <input
                  id="plan-title"
                  className="plan-title-field"
                  aria-label="Название путешествия"
                  placeholder="Название путешествия"
                  value={tripTitle}
                  onChange={(event) => setTripTitle(event.target.value)}
                />
                <p className="plan-kind-note">
                  {planKind === "template"
                    ? "Пример заполненного плана. Новое путешествие открывается пустым."
                    : "Заполните этот план: маршрут, бюджет, сроки, ссылки и файлы."}
                </p>
              </div>
              <div className="plan-head-actions">
                {planKind === "fresh" && (
                  <button type="button" className="plan-save" disabled={!tripTitle.trim()} onClick={saveTrip}>
                    Сохранить
                  </button>
                )}
                <button className="icon-button" onClick={() => setPlanOpen(false)} aria-label="Закрыть план">
                  <Icon name="close" />
                </button>
              </div>
            </header>
            {planReady ? (
              <div className="plan-body">
                <div className={`plan-hero ${planKind === "fresh" ? "fresh" : ""}`}>
                  {planKind === "template" ? (
                    <img
                      src="https://images.unsplash.com/photo-1500043357865-c6b8827edf10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=85&w=900"
                      alt="Побережье Исландии"
                    />
                  ) : (
                    <div className="plan-cover">
                      {cover ? (
                        <img src={cover} alt="Обложка путешествия" />
                      ) : (
                        <div className="plan-cover-empty">Обложка ещё не выбрана</div>
                      )}
                      <div className="plan-cover-actions">
                        <label>
                          <input
                            type="file"
                            accept="image/*"
                            onChange={(event) => {
                              const file = event.target.files?.[0];
                              event.target.value = "";
                              if (!file) return;
                              useCover(URL.createObjectURL(file));
                            }}
                          />
                          Загрузить
                        </label>
                        <button
                          type="button"
                          onClick={() => {
                            setAiOpen(true);
                            setAiBusy(true);
                            window.setTimeout(() => setAiBusy(false), 700);
                          }}
                        >
                          <Icon name="sparkle" size={14} /> Подобрать с ИИ
                        </button>
                      </div>
                      {aiOpen && (
                        <div className="plan-ai-picks" aria-live="polite">
                          {aiBusy ? (
                            <p>Астра подбирает обложку{tripTitle.trim() ? ` для «${tripTitle.trim()}»` : ""}</p>
                          ) : (
                            coverIdeas.map((idea) => (
                              <button type="button" key={idea.title} onClick={() => useCover(idea.src)}>
                                <img src={idea.src} alt="" />
                                <span>{idea.title}</span>
                              </button>
                            ))
                          )}
                        </div>
                      )}
                    </div>
                  )}
                  <div>
                    <input
                      className="plan-summary-field"
                      aria-label="Коротко о поездке"
                      placeholder="Даты, участники, откуда вылет"
                      value={tripSummary}
                      onChange={(event) => setTripSummary(event.target.value)}
                    />
                    <strong>Подготовка на {prepProgress}%</strong>
                    <div className="plan-bar" aria-hidden="true">
                      <i style={{ width: `${prepProgress}%` }} />
                    </div>
                    <span>{prepNote}</span>
                  </div>
                </div>
                <div className="plan-metrics">
                  <div>
                    <span>До старта</span>
                    <strong>{planKind === "template" ? `${daysLeft} дней` : "—"}</strong>
                  </div>
                  <div>
                    <span>Длительность</span>
                    <input
                      aria-label="Длительность"
                      placeholder="Сколько дней"
                      value={tripDuration}
                      onChange={(event) => setTripDuration(event.target.value)}
                    />
                  </div>
                  {(planKind === "template" || needsSaving) && (
                    <div>
                      <span>Накоплено</span>
                      <label>
                        <input
                          aria-label="Накоплено"
                          type="number"
                          min={0}
                          value={saved}
                          onChange={(event) => setSaved(Number(event.target.value) || 0)}
                        />
                        <small>из {formatMoney(budgetTotal)}</small>
                      </label>
                      {planKind === "fresh" && (
                        <form
                          className="plan-saving-add"
                          onSubmit={(event) => {
                            event.preventDefault();
                            const amount = Number(contribution);
                            if (!amount) return;
                            setSaved((value) => value + amount);
                            setContribution("");
                          }}
                        >
                          <input
                            aria-label="Сумма взноса"
                            type="number"
                            min={1}
                            placeholder="Сумма"
                            value={contribution}
                            onChange={(event) => setContribution(event.target.value)}
                          />
                          <button type="submit">Внести</button>
                        </form>
                      )}
                    </div>
                  )}
                  <div>
                    <span>Чек-лист</span>
                    <strong>
                      {doneCount} из {steps.length}
                    </strong>
                  </div>
                </div>
                <div className="plan-columns">
                  <section>
                    <span className="overline">МАРШРУТ</span>
                    <h3>По дням</h3>
                    <ol className="plan-route">
                      {stops.map((stop, index) => (
                        <li key={`${stop.title}-${index}`}>
                          <input
                            aria-label="Дни"
                            placeholder="Дни"
                            value={stop.days}
                            onChange={(event) =>
                              setStops((list) =>
                                list.map((item, itemIndex) =>
                                  itemIndex === index ? { ...item, days: event.target.value } : item,
                                ),
                              )
                            }
                          />
                          <div>
                            <input
                              aria-label="Точка маршрута"
                              placeholder="Куда"
                              value={stop.title}
                              onChange={(event) =>
                                setStops((list) =>
                                  list.map((item, itemIndex) =>
                                    itemIndex === index ? { ...item, title: event.target.value } : item,
                                  ),
                                )
                              }
                            />
                            <input
                              aria-label="Заметка маршрута"
                              placeholder="Что здесь"
                              value={routeNotes[index] ?? ""}
                              onChange={(event) =>
                                setRouteNotes((notes) =>
                                  notes.map((note, noteIndex) =>
                                    noteIndex === index ? event.target.value : note,
                                  ),
                                )
                              }
                            />
                          </div>
                          <button
                            type="button"
                            className="plan-row-remove"
                            aria-label="Удалить день маршрута"
                            onClick={() => {
                              setStops((list) => list.filter((_, itemIndex) => itemIndex !== index));
                              setRouteNotes((notes) => notes.filter((_, noteIndex) => noteIndex !== index));
                            }}
                          >
                            <Icon name="close" size={13} />
                          </button>
                        </li>
                      ))}
                    </ol>
                    <button
                      type="button"
                      className="plan-inline-add"
                      onClick={() => {
                        setStops((list) => [...list, { days: "", title: "" }]);
                        setRouteNotes((notes) => [...notes, ""]);
                      }}
                    >
                      <Icon name="plus" size={14} /> День
                    </button>
                  </section>
                  <section>
                    <span className="overline">БЮДЖЕТ ПОЕЗДКИ</span>
                    <h3>{formatMoney(budgetTotal)}</h3>
                    <ul className="plan-budget">
                      {budgetLines.map((line, index) => (
                        <li key={`${line.name}-${index}`}>
                          <input
                            aria-label="Название расхода"
                            placeholder="Расход"
                            value={line.name}
                            onChange={(event) =>
                              setBudgetLines((lines) =>
                                lines.map((item, itemIndex) =>
                                  itemIndex === index ? { ...item, name: event.target.value } : item,
                                ),
                              )
                            }
                          />
                          <input
                            aria-label={`Сумма: ${line.name || "расход"}`}
                            type="number"
                            min={0}
                            value={line.amount}
                            onChange={(event) =>
                              setBudgetLines((lines) =>
                                lines.map((item, itemIndex) =>
                                  itemIndex === index
                                    ? { ...item, amount: Number(event.target.value) || 0 }
                                    : item,
                                ),
                              )
                            }
                          />
                          <button
                            type="button"
                            className="plan-row-remove"
                            aria-label="Удалить расход"
                            onClick={() =>
                              setBudgetLines((lines) => lines.filter((_, itemIndex) => itemIndex !== index))
                            }
                          >
                            <Icon name="close" size={13} />
                          </button>
                        </li>
                      ))}
                    </ul>
                    <button
                      type="button"
                      className="plan-inline-add"
                      onClick={() => setBudgetLines((lines) => [...lines, { name: "", amount: 0 }])}
                    >
                      <Icon name="plus" size={14} /> Расход
                    </button>
                    <span className="overline">УЧАСТНИКИ</span>
                    <ul className="plan-people">
                      {people.map((person, index) => (
                        <li key={index}>
                          <input
                            aria-label="Участник"
                            placeholder="Имя и роль"
                            value={person}
                            onChange={(event) =>
                              setPeople((list) =>
                                list.map((item, itemIndex) => (itemIndex === index ? event.target.value : item)),
                              )
                            }
                          />
                          <button
                            type="button"
                            className="plan-row-remove"
                            aria-label="Удалить участника"
                            onClick={() => setPeople((list) => list.filter((_, itemIndex) => itemIndex !== index))}
                          >
                            <Icon name="close" size={13} />
                          </button>
                        </li>
                      ))}
                    </ul>
                    <button type="button" className="plan-inline-add" onClick={() => setPeople((list) => [...list, ""])}>
                      <Icon name="plus" size={14} /> Участник
                    </button>
                  </section>
                </div>
                <section className="plan-kit">
                  <div className="plan-kit-grid">
                    <section>
                      <div className="plan-prep-head">
                        <div>
                          <span className="overline">МАТЕРИАЛЫ</span>
                          <h3>Полезные ссылки</h3>
                        </div>
                        <button type="button" onClick={() => setLinkForm((open) => !open)}>
                          <Icon name="plus" size={14} /> Ссылка
                        </button>
                      </div>
                      {linkForm && (
                        <form
                          className="plan-composer"
                          onSubmit={(event) => {
                            event.preventDefault();
                            if (!linkDraft.title.trim() || !linkDraft.url.trim()) return;
                            setLinks((list) => [
                              ...list,
                              { id: `link-${kitSeq.current++}`, ...linkDraft, title: linkDraft.title.trim(), url: linkDraft.url.trim(), note: linkDraft.note.trim() },
                            ]);
                            setLinkDraft({ title: "", url: "", note: "" });
                            setLinkForm(false);
                          }}
                        >
                          <input className="plan-field" placeholder="Название" value={linkDraft.title} onChange={(event) => setLinkDraft({ ...linkDraft, title: event.target.value })} />
                          <input className="plan-field" placeholder="https://" value={linkDraft.url} onChange={(event) => setLinkDraft({ ...linkDraft, url: event.target.value })} />
                          <input className="plan-field" placeholder="Комментарий" value={linkDraft.note} onChange={(event) => setLinkDraft({ ...linkDraft, note: event.target.value })} />
                          <button type="submit">Добавить</button>
                        </form>
                      )}
                      <ul className="plan-notes">
                        {links.map((link) => (
                          <li key={link.id}>
                            <a href={link.url.startsWith("http") ? link.url : `https://${link.url}`} target="_blank" rel="noreferrer">
                              <Icon name="link" size={14} />
                              <strong>{link.title}</strong>
                            </a>
                            {link.note && <span>{link.note}</span>}
                            <button type="button" aria-label={`Удалить ссылку ${link.title}`} onClick={() => setLinks((list) => list.filter((item) => item.id !== link.id))}>
                              <Icon name="close" size={13} />
                            </button>
                          </li>
                        ))}
                      </ul>
                    </section>
                    <section>
                      <div className="plan-prep-head">
                        <div>
                          <span className="overline">ЛЮДИ</span>
                          <h3>Полезные контакты</h3>
                        </div>
                        <button type="button" onClick={() => setContactForm((open) => !open)}>
                          <Icon name="plus" size={14} /> Контакт
                        </button>
                      </div>
                      {contactForm && (
                        <form
                          className="plan-composer"
                          onSubmit={(event) => {
                            event.preventDefault();
                            if (!contactDraft.name.trim() || !contactDraft.value.trim()) return;
                            setContacts((list) => [
                              ...list,
                              { id: `contact-${kitSeq.current++}`, name: contactDraft.name.trim(), value: contactDraft.value.trim(), note: contactDraft.note.trim() },
                            ]);
                            setContactDraft({ name: "", value: "", note: "" });
                            setContactForm(false);
                          }}
                        >
                          <input className="plan-field" placeholder="Имя" value={contactDraft.name} onChange={(event) => setContactDraft({ ...contactDraft, name: event.target.value })} />
                          <input className="plan-field" placeholder="Телефон или почта" value={contactDraft.value} onChange={(event) => setContactDraft({ ...contactDraft, value: event.target.value })} />
                          <input className="plan-field" placeholder="Комментарий" value={contactDraft.note} onChange={(event) => setContactDraft({ ...contactDraft, note: event.target.value })} />
                          <button type="submit">Добавить</button>
                        </form>
                      )}
                      <ul className="plan-notes">
                        {contacts.map((contact) => (
                          <li key={contact.id}>
                            <div>
                              <strong>{contact.name}</strong>
                              <b>{contact.value}</b>
                            </div>
                            {contact.note && <span>{contact.note}</span>}
                            <button type="button" aria-label={`Удалить контакт ${contact.name}`} onClick={() => setContacts((list) => list.filter((item) => item.id !== contact.id))}>
                              <Icon name="close" size={13} />
                            </button>
                          </li>
                        ))}
                      </ul>
                    </section>
                  </div>
                  <section className="plan-places">
                    <div className="plan-prep-head">
                      <div>
                        <span className="overline">МАРШРУТ</span>
                        <h3>Точки на карте</h3>
                      </div>
                      <button type="button" onClick={() => setPlaceForm((open) => !open)}>
                        <Icon name="plus" size={14} /> Точка
                      </button>
                    </div>
                    {placeForm && (
                      <form
                        className="plan-composer"
                        onSubmit={(event) => {
                          event.preventDefault();
                          if (!placeDraft.title.trim() || !placeDraft.address.trim()) return;
                          const id = `place-${kitSeq.current++}`;
                          setPlaces((list) => [
                            ...list,
                            { id, title: placeDraft.title.trim(), address: placeDraft.address.trim(), contact: placeDraft.contact.trim(), note: placeDraft.note.trim(), lat: null, lng: null },
                          ]);
                          setMapId(id);
                          setPlaceDraft({ title: "", address: "", contact: "", note: "" });
                          setPlaceForm(false);
                        }}
                      >
                        <input className="plan-field" placeholder="Название" value={placeDraft.title} onChange={(event) => setPlaceDraft({ ...placeDraft, title: event.target.value })} />
                        <input className="plan-field" placeholder="Адрес" value={placeDraft.address} onChange={(event) => setPlaceDraft({ ...placeDraft, address: event.target.value })} />
                        <input className="plan-field" placeholder="Контакт" value={placeDraft.contact} onChange={(event) => setPlaceDraft({ ...placeDraft, contact: event.target.value })} />
                        <input className="plan-field" placeholder="Комментарий" value={placeDraft.note} onChange={(event) => setPlaceDraft({ ...placeDraft, note: event.target.value })} />
                        <button type="submit">Добавить</button>
                      </form>
                    )}
                    <div className="plan-map">
                      <ul className="plan-notes">
                        {places.map((place) => (
                          <li
                            key={place.id}
                            className={place.id === mappedPlace?.id ? "active" : ""}
                            onClick={() => setMapId(place.id)}
                          >
                            <div>
                              <strong>{place.title}</strong>
                              <b>{place.address}</b>
                            </div>
                            {place.contact && <span>{place.contact}</span>}
                            {place.note && <span>{place.note}</span>}
                            <button
                              type="button"
                              aria-label={`Удалить точку ${place.title}`}
                              onClick={(event) => {
                                event.stopPropagation();
                                setPlaces((list) => list.filter((item) => item.id !== place.id));
                                if (mapId === place.id) {
                                  const rest = places.filter((item) => item.id !== place.id);
                                  setMapId(rest[0]?.id ?? "");
                                }
                              }}
                            >
                              <Icon name="close" size={13} />
                            </button>
                          </li>
                        ))}
                      </ul>
                      <div className="plan-map-frame">
                        {mappedPlace && mapEmbed(mappedPlace) ? (
                          <iframe key={mappedPlace.id} title={`Карта: ${mappedPlace.title}`} src={mapEmbed(mappedPlace)} />
                        ) : (
                          <div className="plan-map-empty">
                            <p>
                              {mappedPlace
                                ? "Для этой точки нет координаты. Откройте адрес на карте."
                                : "Добавьте точку, и она появится на карте."}
                            </p>
                            {mappedPlace && (
                              <a href={`https://www.openstreetmap.org/search?query=${encodeURIComponent(mappedPlace.address)}`} target="_blank" rel="noreferrer">
                                Открыть адрес
                              </a>
                            )}
                          </div>
                        )}
                        {mappedPlace && (
                          <a href={mappedPlace.lat != null ? `https://www.openstreetmap.org/?mlat=${mappedPlace.lat}&mlon=${mappedPlace.lng}#map=12/${mappedPlace.lat}/${mappedPlace.lng}` : `https://www.openstreetmap.org/search?query=${encodeURIComponent(mappedPlace.address)}`} target="_blank" rel="noreferrer">
                            На карте: {mappedPlace.title}
                          </a>
                        )}
                      </div>
                    </div>
                  </section>
                  <section className="plan-files">
                    <div className="plan-prep-head">
                      <div>
                        <span className="overline">БИЛЕТЫ И ДОКУМЕНТЫ</span>
                        <h3>Файлы</h3>
                      </div>
                      {files.length > 0 && <span className="plan-file-count">{files.length}</span>}
                    </div>
                    <label
                      className="plan-drop"
                      onDragOver={(event) => event.preventDefault()}
                      onDrop={(event) => {
                        event.preventDefault();
                        const picked = [...event.dataTransfer.files];
                        if (!picked.length) return;
                        setFiles((list) => [
                          ...list,
                          ...picked.map((file) => ({
                            id: `file-${kitSeq.current++}`,
                            name: file.name,
                            size: file.size,
                            kind: file.type || "application/octet-stream",
                            url: URL.createObjectURL(file),
                          })),
                        ]);
                      }}
                    >
                      <input
                        type="file"
                        multiple
                        accept="image/*,.pdf,.doc,.docx,.xls,.xlsx"
                        onChange={(event) => {
                          const picked = [...(event.target.files ?? [])];
                          setFiles((list) => [
                            ...list,
                            ...picked.map((file) => ({
                              id: `file-${kitSeq.current++}`,
                              name: file.name,
                              size: file.size,
                              kind: file.type || "application/octet-stream",
                              url: URL.createObjectURL(file),
                            })),
                          ]);
                          event.target.value = "";
                        }}
                      />
                      <span>
                        <Icon name="file" size={18} />
                      </span>
                      <strong>Билеты, ваучеры, страховка</strong>
                      <small>Перетащите сюда или выберите файлы · PDF, фото, Word, Excel</small>
                    </label>
                    {files.length > 0 && (
                      <ul className="plan-file-list">
                        {files.map((file) => {
                          const ext = file.name.split(".").pop()?.toUpperCase() || "FILE";
                          return (
                            <li key={file.id} className={file.id === previewId ? "open" : ""}>
                              <button type="button" onClick={() => setPreviewId(file.id === previewId ? null : file.id)}>
                                <i>{ext.slice(0, 4)}</i>
                                <span>
                                  <strong>{file.name}</strong>
                                  <small>{fileSize(file.size)}</small>
                                </span>
                              </button>
                              <button
                                type="button"
                                aria-label={`Удалить файл ${file.name}`}
                                onClick={() => {
                                  URL.revokeObjectURL(file.url);
                                  setFiles((list) => list.filter((item) => item.id !== file.id));
                                  if (previewId === file.id) setPreviewId(null);
                                }}
                              >
                                <Icon name="close" size={13} />
                              </button>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                    {previewFile && (
                      <div className="plan-file-view">
                        {previewFile.kind.startsWith("image/") ? (
                          <img src={previewFile.url} alt={previewFile.name} />
                        ) : previewFile.kind === "application/pdf" ? (
                          <iframe title={previewFile.name} src={previewFile.url} />
                        ) : (
                          <a href={previewFile.url} download={previewFile.name}>
                            Скачать {previewFile.name}
                          </a>
                        )}
                      </div>
                    )}
                  </section>
                  <section className="plan-telegram">
                    <div className="plan-prep-head">
                      <div>
                        <span className="overline">ЧАТ МЕРОПРИЯТИЯ</span>
                        <h3>Telegram</h3>
                      </div>
                      {telegram ? (
                        <button type="button" onClick={() => setTelegram(null)}>
                          Отключить
                        </button>
                      ) : (
                        <button type="button" onClick={() => setTelegramOpen((open) => !open)}>
                          <Icon name="link" size={14} /> Подключить чат
                        </button>
                      )}
                    </div>
                    {!telegram && telegramOpen && (
                      <form
                        className="plan-composer"
                        onSubmit={(event) => {
                          event.preventDefault();
                          const value = telegramDraft.trim().replace(/^@/, "");
                          if (!value) return;
                          setTelegram(value);
                          setTelegramDraft("");
                          setTelegramOpen(false);
                        }}
                      >
                        <input className="plan-field" placeholder="t.me/iceland_trip или @iceland_trip" value={telegramDraft} onChange={(event) => setTelegramDraft(event.target.value)} />
                        <button type="submit">Подключить</button>
                      </form>
                    )}
                    {telegram && (
                      <div className="plan-chat">
                        <header>
                          <strong>{telegram.replace(/^https?:\/\/t\.me\//, "")}</strong>
                          <span>Последние сообщения</span>
                        </header>
                        <ul>
                          {tripChat.map((message) => (
                            <li key={message.time}>
                              <b>
                                {message.author}
                                <small>{message.time}</small>
                              </b>
                              <p>{message.text}</p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </section>
                </section>
                <section className="plan-prep">
                  <div className="plan-prep-head">
                    <div>
                      <span className="overline">ПОДГОТОВКА</span>
                      <h3>Общий прогресс</h3>
                    </div>
                    <strong>{prepProgress}%</strong>
                  </div>
                  <div className="plan-bar" role="progressbar" aria-valuenow={prepProgress} aria-valuemin={0} aria-valuemax={100}>
                    <i style={{ width: `${prepProgress}%` }} />
                  </div>
                  <span>
                    {doneCount} из {steps.length} шагов закрыто · 16 июня — 14 сентября
                  </span>
                </section>
                <section className="plan-checks">
                  <div className="plan-prep-head">
                    <h3>Чек-лист</h3>
                    <button
                      type="button"
                      onClick={() => {
                        const id = `step-${nextStep.current++}`;
                        setSteps((list) => [
                          ...list,
                          {
                            id,
                            title: "Новый шаг",
                            done: false,
                            start: "2026-06-16",
                            deadline: "2026-09-01",
                            tone: "planned",
                            icon: "check",
                          },
                        ]);
                      }}
                    >
                      <Icon name="plus" size={14} /> Шаг
                    </button>
                  </div>
                  <div className="plan-check-list">
                    {steps.map((step) => (
                      <div className={step.done ? "plan-check-row done" : "plan-check-row"} key={step.id}>
                        <button
                          type="button"
                          aria-label={step.done ? `Вернуть: ${step.title}` : `Закрыть: ${step.title}`}
                          aria-pressed={step.done}
                          onClick={() => patchStep(step.id, { done: !step.done })}
                        >
                          {step.done ? <Icon name="check" size={12} /> : null}
                        </button>
                        <input
                          aria-label="Название шага"
                          value={step.title}
                          onChange={(event) => patchStep(step.id, { title: event.target.value })}
                        />
                        <input
                          id={`plan-deadline-${step.id}`}
                          aria-label={`Дедлайн: ${step.title}`}
                          type="date"
                          value={step.deadline}
                          onChange={(event) => {
                            const deadline = event.target.value;
                            if (!deadline) return;
                            patchStep(step.id, {
                              deadline,
                              start: deadline < step.start ? deadline : step.start,
                            });
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </section>
                <section className="plan-gantt-block">
                  <div className="plan-prep-head">
                    <div>
                      <span className="overline">СРОКИ</span>
                      <h3>Диаграмма подготовки</h3>
                    </div>
                  </div>
                  <div className="scheduler-scroll">
                    <div className="gantt-calendar plan-gantt">
                      <div className="gantt-corner">
                        <span>Шаг подготовки</span>
                      </div>
                      {prepWeekDates.map((date, index) => (
                        <div className={`gantt-day ${index === 0 ? "today" : ""}`} key={date.toISOString()}>
                          <span>{prepMonths[date.getMonth()]}</span>
                          <strong>{date.getDate()}</strong>
                        </div>
                      ))}
                      {steps.map((step) => {
                        const bar = prepBar(step);
                        return (
                          <div className="gantt-row" key={step.id}>
                            <button
                              className="gantt-label"
                              onClick={() => patchStep(step.id, { done: !step.done })}
                            >
                              <span>
                                <Icon name={step.icon} size={15} />
                              </span>
                              <div>
                                <strong className={step.done ? "struck" : ""}>{step.title}</strong>
                                <small>до {prepLabel(step.deadline)}</small>
                              </div>
                            </button>
                            <div className="gantt-track">
                              <button
                                className={`gantt-bar ${step.tone} ${step.done ? "done" : ""}`}
                                style={{ gridColumn: `${bar.column} / span ${bar.span}` }}
                                onClick={() => {
                                  const field = document.getElementById(`plan-deadline-${step.id}`);
                                  if (!(field instanceof HTMLInputElement)) return;
                                  field.scrollIntoView({ block: "center", behavior: "smooth" });
                                  field.focus();
                                  try {
                                    field.showPicker?.();
                                  } catch {
                                    /* календарь браузера может быть уже открыт */
                                  }
                                }}
                              >
                                <span>{step.title}</span>
                                {bar.span > 1 && <small>{bar.span} нед.</small>}
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="scheduler-legend">
                    <span>
                      <i className="flight" />
                      Перелёт
                    </span>
                    <span>
                      <i className="stay" />
                      Жильё
                    </span>
                    <span>
                      <i className="transport" />
                      Транспорт
                    </span>
                    <span>
                      <i className="work" />
                      Документы
                    </span>
                    <span>
                      <i className="equipment" />
                      Снаряжение
                    </span>
                    <span>
                      <i className="planned" />
                      В плане
                    </span>
                  </div>
                </section>
              </div>
            ) : (
              <div className="plan-loader" aria-live="polite">
                <i />
                <span>Загружаем план</span>
              </div>
            )}
          </article>
        </div>
      )}
    </div>
  );
}

type TaskView = "Задачи" | "Регулярные задачи" | "Agile";

function TasksPage({
  plan,
  toast,
  view,
}: {
  plan: () => void;
  toast: (text: string) => void;
  view: TaskView;
}) {
  const [listDone, setListDone] = useState([false, true, false, false, false]);
  const [recurringEnabled, setRecurringEnabled] = useState([true, true, true, false]);

  if (view === "Задачи") {
    return (
      <div className="section-page task-list-page">
        <PageTitle
          label="ЛИЧНОЕ И РАБОЧЕЕ"
          title="Задачи"
          description="Все разовые дела, дедлайны и задачи из ваших проектов."
          action={
            <button className="primary page-action" onClick={plan}>
              Новая задача <Icon name="plus" size={17} />
            </button>
          }
        />
        <div className="stats-row">
          <StatCard
            label="На сегодня"
            value="5"
            note="2 срочные задачи"
            icon="clock"
            tone="orange"
          />
          <StatCard label="В работе" value="8" note="3 связаны с проектами" icon="briefcase" />
          <StatCard
            label="Завершено"
            value="24"
            note="За последние 7 дней"
            icon="check"
            tone="blue"
          />
          <StatCard
            label="Просрочено"
            value="1"
            note="Требует внимания"
            icon="bell"
            tone="purple"
          />
        </div>
        <div className="tasks-list-layout">
          <article className="panel task-inbox">
            <div className="workspace-head">
              <div>
                <h3>Все задачи</h3>
                <span className="overline">СЕГОДНЯ И БЛИЖАЙШИЕ</span>
              </div>
              <div className="segmented">
                <button className="active">Все</button>
                <button>Работа</button>
                <button>Личное</button>
              </div>
            </div>
            <div className="task-date-group">
              <span>СЕГОДНЯ · 3 ЗАДАЧИ</span>
              {[
                ["Отправить отчёт по проекту", "Astra Frontend", "12:00", "high"],
                ["Созвон с командой", "Google Meet · Работа", "16:30", "medium"],
                ["Купить страховку для поездки", "Лиссабон · Документы", "18:00", "low"],
              ].map(([title, note, time, priority], index) => (
                <button
                  className={listDone[index] ? "list-task done" : "list-task"}
                  key={title}
                  onClick={() =>
                    setListDone((value) =>
                      value.map((item, itemIndex) => (itemIndex === index ? !item : item)),
                    )
                  }
                >
                  <span className="task-check">
                    {listDone[index] && <Icon name="check" size={17} />}
                  </span>
                  <i className={`priority ${priority}`} />
                  <div>
                    <strong>{title}</strong>
                    <small>{note}</small>
                  </div>
                  <time>{time}</time>
                  <Icon name="more" size={17} />
                </button>
              ))}
            </div>
            <div className="task-date-group">
              <span>ЗАВТРА · 2 ЗАДАЧИ</span>
              {[
                ["Забронировать трансфер", "Лиссабон · Путешествие", "10:00"],
                ["Проверить аналитику релиза", "Astra Frontend", "14:00"],
              ].map(([title, note, time], itemIndex) => {
                const index = itemIndex + 3;
                return (
                  <button
                    className={listDone[index] ? "list-task done" : "list-task"}
                    key={title}
                    onClick={() =>
                      setListDone((value) =>
                        value.map((item, currentIndex) => (currentIndex === index ? !item : item)),
                      )
                    }
                  >
                    <span className="task-check">
                      {listDone[index] && <Icon name="check" size={17} />}
                    </span>
                    <i className="priority low" />
                    <div>
                      <strong>{title}</strong>
                      <small>{note}</small>
                    </div>
                    <time>{time}</time>
                    <Icon name="more" size={17} />
                  </button>
                );
              })}
            </div>
          </article>
          <aside className="panel task-day-summary">
            <span className="overline">ВАШ ДЕНЬ</span>
            <h3>Понедельник, 16 июня</h3>
            <div
              className="day-progress"
              style={{
                background: `conic-gradient(#527762 ${listDone.filter(Boolean).length * 20}%, #e5ebe7 0)`,
              }}
            >
              <span>
                <strong>{listDone.filter(Boolean).length}</strong>
                <small>из 5 выполнено</small>
              </span>
            </div>
            <div className="day-focus">
              <Icon name="sparkle" size={17} />
              <p>
                <strong>Совет Астры</strong>
                <span>Начните с отчёта: до дедлайна осталось меньше двух часов.</span>
              </p>
            </div>
            <button onClick={() => toast("Режим фокуса запущен")}>
              Начать фокус-сессию <Icon name="arrow" size={15} />
            </button>
          </aside>
        </div>
      </div>
    );
  }

  if (view === "Регулярные задачи") {
    return (
      <div className="section-page recurring-tasks-page">
        <PageTitle
          label="АВТОМАТИЗАЦИЯ РУТИНЫ"
          title="Регулярные задачи"
          description="Настройте повторяющиеся дела — Астра сама добавит их в план в нужный момент."
          action={
            <button className="primary page-action" onClick={plan}>
              Новое правило <Icon name="plus" size={17} />
            </button>
          }
        />
        <div className="stats-row">
          <StatCard
            label="Активные правила"
            value="3"
            note="Одно правило на паузе"
            icon="calendar"
          />
          <StatCard
            label="На этой неделе"
            value="11"
            note="7 уже выполнено"
            icon="check"
            tone="blue"
          />
          <StatCard
            label="Экономия времени"
            value="3 ч 20 мин"
            note="За текущий месяц"
            icon="clock"
            tone="purple"
          />
          <StatCard
            label="Следующая задача"
            value="Завтра"
            note="Утренняя планёрка · 09:30"
            icon="bell"
            tone="orange"
          />
        </div>
        <article className="panel recurring-rules-panel">
          <div className="workspace-head">
            <div>
              <h3>Правила повторения</h3>
              <span className="overline">4 СЦЕНАРИЯ</span>
            </div>
            <button className="round-plus" onClick={plan}>
              <Icon name="plus" size={17} />
            </button>
          </div>
          <div className="recurring-task-rules">
            {[
              [
                "Еженедельный обзор проектов",
                "Каждую пятницу · 16:00",
                "Работа",
                "Следующая: 20 июня",
                "briefcase",
              ],
              ["Утренняя планёрка", "Пн–Пт · 09:30", "Работа", "Следующая: завтра", "coffee"],
              [
                "Проверить бюджет",
                "1-го числа каждого месяца",
                "Финансы",
                "Следующая: 1 июля",
                "wallet",
              ],
              [
                "Резервная копия документов",
                "Каждое воскресенье · 20:00",
                "Личное",
                "На паузе",
                "file",
              ],
            ].map(([title, schedule, category, next, icon], index) => (
              <div
                className={recurringEnabled[index] ? "recurring-rule" : "recurring-rule disabled"}
                key={title}
              >
                <span className={`rule-icon r${index}`}>
                  <Icon name={icon as IconName} size={19} />
                </span>
                <div>
                  <strong>{title}</strong>
                  <small>{schedule}</small>
                  <span>
                    {category} · {next}
                  </span>
                </div>
                <button
                  className={recurringEnabled[index] ? "switch on" : "switch"}
                  onClick={() =>
                    setRecurringEnabled((value) =>
                      value.map((item, itemIndex) => (itemIndex === index ? !item : item)),
                    )
                  }
                >
                  <i />
                </button>
                <button className="rule-more" onClick={() => toast(`${title}: настройки открыты`)}>
                  <Icon name="more" size={17} />
                </button>
              </div>
            ))}
          </div>
        </article>
        <article className="panel recurring-calendar">
          <div>
            <span className="overline">БЛИЖАЙШИЕ 7 ДНЕЙ</span>
            <h3>Расписание повторений</h3>
          </div>
          {["ПН 16", "ВТ 17", "СР 18", "ЧТ 19", "ПТ 20", "СБ 21", "ВС 22"].map((day, index) => (
            <button className={index === 0 ? "today" : ""} key={day}>
              <strong>{day}</strong>
              <span>{index < 5 ? "1" : index === 6 ? "1" : "0"}</span>
            </button>
          ))}
        </article>
      </div>
    );
  }

  const columns = [
    {
      title: "Бэклог",
      count: 4,
      cards: [
        ["Обновить портфолио", "Личное", "20 июн"],
        ["Сравнить страховки", "Лиссабон", "18 июн"],
        ["Купить переходник", "Покупки", "22 июн"],
      ],
    },
    {
      title: "В работе",
      count: 3,
      cards: [
        ["Отчёт по проекту", "Работа", "Сегодня"],
        ["Маршрут по Исландии", "Путешествия", "24 июн"],
        ["Документы для визы", "Документы", "28 июн"],
      ],
    },
    {
      title: "На проверке",
      count: 2,
      cards: [
        ["Макеты нового релиза", "Работа", "Сегодня"],
        ["Бюджет на июль", "Финансы", "30 июн"],
      ],
    },
    {
      title: "Готово",
      count: 5,
      cards: [
        ["Бронь коворкинга", "Лиссабон", "14 июн"],
        ["Созвон с командой", "Работа", "14 июн"],
      ],
    },
  ];
  return (
    <div className="section-page tasks-page">
      <PageTitle
        label="ПЛАНИРОВЩИК ДЕЛ"
        title="Моя доска"
        description="Организуйте личные и рабочие задачи в едином потоке."
        action={
          <button className="primary page-action" onClick={plan}>
            Новая задача <Icon name="plus" size={17} />
          </button>
        }
      />
      <div className="board-toolbar panel">
        <div className="board-filters">
          <button className="active">
            Все задачи <span>14</span>
          </button>
          <button>Работа</button>
          <button>Личное</button>
          <button>Путешествия</button>
        </div>
        <div>
          <button className="board-avatar">АМ</button>
          <button className="icon-button" onClick={() => toast("Настройки доски открыты")}>
            <Icon name="settings" size={17} />
          </button>
        </div>
      </div>
      <div className="kanban">
        {columns.map((column, colIndex) => (
          <section className="kanban-column" key={column.title}>
            <div className="kanban-head">
              <span>
                <i className={`dot d${colIndex}`} />
                {column.title} <b>{column.count}</b>
              </span>
              <button onClick={plan}>
                <Icon name="plus" size={16} />
              </button>
            </div>
            <div className="kanban-cards">
              {column.cards.map(([title, tag, date], index) => (
                <button
                  className="kanban-card"
                  key={title}
                  onClick={() => toast(`${title}: карточка открыта`)}
                >
                  <span className={`card-tag tag-${colIndex}`}>{tag}</span>
                  <strong>{title}</strong>
                  <div>
                    <span>
                      <Icon name="calendar" size={13} />
                      {date}
                    </span>
                    {index === 0 && (
                      <span>
                        <Icon name="check" size={13} />
                        2/3
                      </span>
                    )}
                    <span className="mini-avatar">АМ</span>
                  </div>
                </button>
              ))}
              <button className="add-card" onClick={plan}>
                <Icon name="plus" size={15} /> Добавить карточку
              </button>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

function SavingsPage({ plan, toast }: { plan: () => void; toast: (text: string) => void }) {
  return (
    <div className="section-page">
      <PageTitle
        label="НАКОПЛЕНИЯ"
        title="Копилка"
        description="Финансовые цели, автоматические пополнения и бережные рекомендации."
        action={
          <button className="primary page-action" onClick={plan}>
            Новая цель <Icon name="plus" size={17} />
          </button>
        }
      />
      <div className="savings-summary panel">
        <div>
          <span className="overline">ВСЕГО В КОПИЛКАХ</span>
          <strong>428 600 ₽</strong>
          <p>+ 42 000 ₽ в этом месяце</p>
        </div>
        <div className="summary-ring">
          <span>
            <strong>64%</strong>
            <small>общий прогресс</small>
          </span>
        </div>
        <div className="saving-forecast">
          <Icon name="sparkle" size={20} />
          <p>
            <strong>Вы опережаете план на 12 дней</strong>
            <span>Если продолжить в том же темпе, все цели будут достигнуты раньше срока.</span>
          </p>
        </div>
      </div>
      <div className="goals-grid">
        {[
          ["Исландия", "186 000 ₽", "260 000 ₽", "72%", "01 сентября", "purple"],
          ["Новый MacBook", "148 600 ₽", "240 000 ₽", "62%", "15 октября", "blue"],
          ["Финансовая подушка", "94 000 ₽", "250 000 ₽", "38%", "01 марта", "green"],
        ].map(([title, value, total, progress, date, tone]) => (
          <article className={`goal-card panel ${tone}`} key={title}>
            <div className="goal-head">
              <span className="goal-icon">
                <Icon
                  name={
                    title === "Исландия"
                      ? "plane"
                      : title === "Новый MacBook"
                        ? "briefcase"
                        : "wallet"
                  }
                  size={20}
                />
              </span>
              <button onClick={() => toast(`${title}: меню открыто`)}>
                <Icon name="more" size={18} />
              </button>
            </div>
            <span className="overline">ЦЕЛЬ · ДО {date.toUpperCase()}</span>
            <h3>{title}</h3>
            <strong>{value}</strong>
            <small>из {total}</small>
            <div className="goal-progress">
              <i>
                <em style={{ width: progress }} />
              </i>
              <span>{progress}</span>
            </div>
            <button className="goal-add" onClick={() => toast(`${title}: пополнение открыто`)}>
              <Icon name="plus" size={15} /> Пополнить
            </button>
          </article>
        ))}
        <button className="new-goal-card" onClick={plan}>
          <span>
            <Icon name="plus" size={20} />
          </span>
          <strong>Новая цель</strong>
          <small>Начните копить на то, что важно</small>
        </button>
      </div>
      <div className="section-grid saving-bottom">
        <article className="panel workspace-panel">
          <div className="workspace-head">
            <div>
              <span className="overline">АВТОПОПОЛНЕНИЯ</span>
              <h3>Умные правила</h3>
            </div>
            <button className="plain-button" onClick={() => toast("Настройки правил открыты")}>
              Настроить <Icon name="chevron" size={15} />
            </button>
          </div>
          <div className="smart-rules">
            <div>
              <span className="stat-icon green">
                <Icon name="calendar" size={17} />
              </span>
              <p>
                <strong>10% с каждого дохода</strong>
                <small>Следующее пополнение 25 июня</small>
              </p>
              <b>9 500 ₽</b>
            </div>
            <div>
              <span className="stat-icon blue">
                <Icon name="sparkle" size={17} />
              </span>
              <p>
                <strong>Округление покупок</strong>
                <small>Накоплено за июнь</small>
              </p>
              <b>1 840 ₽</b>
            </div>
          </div>
        </article>
        <article className="panel saving-tip">
          <Icon name="sparkle" size={24} />
          <div>
            <span className="overline">СОВЕТ АСТРЫ</span>
            <h3>Освободите ещё 3 200 ₽ в месяц</h3>
            <p>
              Три подписки не использовались больше 45 дней. Проверьте их перед следующим списанием.
            </p>
            <button onClick={() => toast("Анализ подписок открыт")}>
              Посмотреть подписки <Icon name="arrow" size={15} />
            </button>
          </div>
        </article>
      </div>
    </div>
  );
}

function SettingsPage({ toast }: { toast: (text: string) => void }) {
  const [toggles, setToggles] = useState([true, true, false, true]);
  return (
    <div className="section-page settings-page">
      <PageTitle
        label="ПРОФИЛЬ И СЕРВИСЫ"
        title="Настройки"
        description="Персонализация Астры, уведомления и подключённые инструменты."
      />
      <div className="settings-layout">
        <aside className="settings-nav panel">
          {["Профиль", "Уведомления", "Интеграции", "Безопасность", "Тариф и оплата"].map(
            (item, index) => (
              <button
                className={index === 0 ? "active" : ""}
                key={item}
                onClick={() => toast(`${item}: раздел открыт`)}
              >
                <Icon
                  name={
                    index === 0
                      ? "home"
                      : index === 1
                        ? "bell"
                        : index === 2
                          ? "grid"
                          : index === 3
                            ? "settings"
                            : "wallet"
                  }
                  size={17}
                />
                {item}
                <Icon name="chevron" size={14} />
              </button>
            ),
          )}
        </aside>
        <div className="settings-main">
          <article className="panel settings-block">
            <div className="settings-title">
              <div>
                <h3>Личные данные</h3>
                <p>Используются для персональных подсказок и бронирований.</p>
              </div>
              <button
                className="secondary-button"
                onClick={() => toast("Редактирование профиля открыто")}
              >
                Редактировать
              </button>
            </div>
            <div className="profile-card">
              <div className="avatar large">АМ</div>
              <div>
                <strong>Алексей Морозов</strong>
                <span>Product Designer · Remote</span>
                <small>alexey@astra.demo</small>
              </div>
              <span className="soft-badge">PRO</span>
            </div>
            <div className="profile-fields">
              <label>
                <span>Домашний город</span>
                <strong>Москва, Россия</strong>
              </label>
              <label>
                <span>Часовой пояс</span>
                <strong>UTC +3 · Москва</strong>
              </label>
              <label>
                <span>Основная валюта</span>
                <strong>Российский рубль · ₽</strong>
              </label>
            </div>
          </article>
          <article className="panel settings-block">
            <div className="settings-title">
              <div>
                <h3>Интеграции</h3>
                <p>Подключите сервисы, чтобы Астра работала точнее.</p>
              </div>
              <button
                className="secondary-button"
                onClick={() => toast("Каталог интеграций открыт")}
              >
                <Icon name="plus" size={15} /> Добавить
              </button>
            </div>
            <div className="integrations">
              {[
                ["Google Calendar", "События и встречи синхронизированы", "G", true],
                ["Telegram", "Напоминания и быстрые действия", "T", true],
                ["Tinkoff", "Автоматический учёт операций", "Т", false],
                ["Notion", "Задачи и рабочие заметки", "N", true],
              ].map(([title, note, logo], index) => (
                <div key={String(title)}>
                  <span className={`integration-logo l${index}`}>{logo}</span>
                  <p>
                    <strong>{title}</strong>
                    <small>{note}</small>
                  </p>
                  <button
                    className={toggles[index] ? "switch on" : "switch"}
                    onClick={() => setToggles((v) => v.map((x, i) => (i === index ? !x : x)))}
                  >
                    <i />
                  </button>
                </div>
              ))}
            </div>
          </article>
          <article className="panel settings-block compact-setting">
            <div>
              <span className="stat-icon purple">
                <Icon name="bell" size={18} />
              </span>
              <p>
                <strong>Умные уведомления</strong>
                <small>Астра выбирает важные напоминания с учётом вашего расписания.</small>
              </p>
            </div>
            <button
              className={toggles[0] ? "switch on" : "switch"}
              onClick={() => setToggles((v) => v.map((x, i) => (i === 0 ? !x : x)))}
            >
              <i />
            </button>
          </article>
        </div>
      </div>
    </div>
  );
}

type AgentProject = {
  id: number;
  name: string;
  repository: string;
  environment: string;
  status: "online" | "waiting" | "offline";
  agent: string;
  activity: string;
};

const initialAgentProjects: AgentProject[] = [
  {
    id: 1,
    name: "Astra Frontend",
    repository: "github.com/deestylov-new/astra-front",
    environment: "Production",
    status: "online",
    agent: "Frontend Scout",
    activity: "Изучил структуру dashboard · 4 мин назад",
  },
  {
    id: 2,
    name: "Travel Core API",
    repository: "github.com/astra-labs/travel-core",
    environment: "Staging",
    status: "waiting",
    agent: "Backend Navigator",
    activity: "Ожидает установки на сервер",
  },
  {
    id: 3,
    name: "Nomad Analytics",
    repository: "github.com/astra-labs/nomad-analytics",
    environment: "Production",
    status: "offline",
    agent: "Data Observer",
    activity: "Нет связи · 2 часа",
  },
];

function WorkspacePage({ toast }: { toast: (text: string) => void }) {
  const [projects, setProjects] = useState(initialAgentProjects);
  const [selected, setSelected] = useState(1);
  const [creating, setCreating] = useState(false);
  const [projectName, setProjectName] = useState("");
  const [repository, setRepository] = useState("");
  const [environment, setEnvironment] = useState("Production");
  const activeProject = projects.find((project) => project.id === selected) ?? projects[0];
  const installCommand = `curl -fsSL https://agents.astra.demo/install | bash -s -- \\\n  --project=${activeProject.id} \\\n  --token=astra_demo_7K9••••••••`;

  function copyCommand() {
    if (navigator.clipboard) void navigator.clipboard.writeText(installCommand);
    toast("Команда установки скопирована");
  }

  function createProject() {
    if (!projectName.trim() || !repository.trim()) return;
    const id = Date.now();
    setProjects((current) => [
      ...current,
      {
        id,
        name: projectName.trim(),
        repository: repository.replace(/^https?:\/\//, ""),
        environment,
        status: "waiting",
        agent: "Новый субагент",
        activity: "Ожидает установки на сервер",
      },
    ]);
    setSelected(id);
    setCreating(false);
    setProjectName("");
    setRepository("");
    toast("Проект создан — установите субагента");
  }

  return (
    <div className="section-page workspace-page">
      <PageTitle
        label="ПРОЕКТЫ И СУБАГЕНТЫ"
        title="Мои проекты"
        description="Подключайте проекты, устанавливайте локальных субагентов и поручайте им работу с кодовой базой."
        action={
          <button className="primary page-action" onClick={() => setCreating(true)}>
            Новый проект <Icon name="plus" size={17} />
          </button>
        }
      />

      <div className="stats-row workspace-stats">
        <StatCard
          label="Проекты"
          value={String(projects.length)}
          note="Во всех окружениях"
          icon="briefcase"
        />
        <StatCard
          label="Агенты онлайн"
          value={String(projects.filter((project) => project.status === "online").length)}
          note="Готовы к задачам"
          icon="sparkle"
          tone="green"
        />
        <StatCard
          label="Выполнено за неделю"
          value="27"
          note="+8 к прошлой неделе"
          icon="check"
          tone="blue"
        />
        <StatCard
          label="Время агентов"
          value="18 ч 42 мин"
          note="Сэкономлено команде"
          icon="clock"
          tone="purple"
        />
      </div>

      <article className="agent-onboarding panel">
        <div className="onboarding-copy">
          <span className="workspace-mark">
            <Icon name="terminal" size={22} />
          </span>
          <div>
            <span className="overline">КАК ЭТО РАБОТАЕТ</span>
            <h3>Субагент работает внутри вашего проекта</h3>
            <p>
              Он получает доступ только к выбранному репозиторию, изучает код и выполняет задачи в
              окружении проекта.
            </p>
          </div>
        </div>
        <div className="onboarding-steps">
          {[
            ["01", "Добавьте проект", "Укажите репозиторий и окружение"],
            ["02", "Запустите команду", "Установщик развернёт субагента"],
            ["03", "Ставьте задачи", "Обращайтесь к агенту из Астры"],
          ].map(([number, title, note]) => (
            <div key={number}>
              <span>{number}</span>
              <p>
                <strong>{title}</strong>
                <small>{note}</small>
              </p>
            </div>
          ))}
        </div>
      </article>

      <div className="workspace-project-layout">
        <section className="panel projects-panel">
          <div className="workspace-head">
            <div>
              <h3>Ваши проекты</h3>
              <span className="overline">{projects.length} ПОДКЛЮЧЕНИЯ</span>
            </div>
            <button className="round-plus" onClick={() => setCreating(true)}>
              <Icon name="plus" size={17} />
            </button>
          </div>
          <div className="agent-projects">
            {projects.map((project) => (
              <article
                className={selected === project.id ? "agent-project active" : "agent-project"}
                key={project.id}
              >
                <button className="project-main" onClick={() => setSelected(project.id)}>
                  <span className="project-logo">
                    <Icon name={project.status === "online" ? "terminal" : "server"} size={20} />
                  </span>
                  <div>
                    <strong>{project.name}</strong>
                    <small>
                      <Icon name="link" size={12} /> {project.repository}
                    </small>
                  </div>
                  <span className={`agent-status ${project.status}`}>
                    <i />
                    {project.status === "online"
                      ? "Онлайн"
                      : project.status === "waiting"
                        ? "Установка"
                        : "Офлайн"}
                  </span>
                </button>
                <div className="project-agent">
                  <div>
                    <span className="agent-avatar">
                      <Icon name="sparkle" size={15} />
                    </span>
                    <p>
                      <strong>{project.agent}</strong>
                      <small>{project.activity}</small>
                    </p>
                  </div>
                  <button
                    className={
                      project.status === "online" ? "agent-chat-button" : "agent-chat-button muted"
                    }
                    onClick={() =>
                      project.status === "online"
                        ? toast(`Диалог с ${project.agent} открыт`)
                        : setSelected(project.id)
                    }
                  >
                    {project.status === "online" ? "Обратиться" : "Подключить"}
                    <Icon name={project.status === "online" ? "arrow" : "terminal"} size={14} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <aside className="panel install-panel">
          <div className="install-head">
            <span className={`agent-status ${activeProject.status}`}>
              <i />
              {activeProject.status === "online" ? "Агент подключён" : "Требуется установка"}
            </span>
            <button onClick={() => toast("Настройки проекта открыты")}>
              <Icon name="settings" size={17} />
            </button>
          </div>
          <span className="workspace-mark large">
            <Icon name="terminal" size={25} />
          </span>
          <h3>
            {activeProject.status === "online"
              ? "Переустановить субагента"
              : "Установить субагента"}
          </h3>
          <p>Запустите команду в терминале сервера из корневой директории проекта.</p>
          <div className="install-code">
            <div>
              <span />
              <span />
              <span />
              <small>terminal</small>
            </div>
            <pre>{installCommand}</pre>
            <button onClick={copyCommand}>
              <Icon name="copy" size={16} /> Копировать
            </button>
          </div>
          <div className="install-security">
            <Icon name="check" size={16} />
            <p>
              <strong>Безопасное подключение</strong>
              <span>
                Токен привязан только к проекту {activeProject.name} и скрыт после установки.
              </span>
            </p>
          </div>
          <button
            className="install-help"
            onClick={() => toast("Инструкция по ручной установке открыта")}
          >
            Инструкция для Docker и CI/CD <Icon name="chevron" size={14} />
          </button>
        </aside>
      </div>

      <article className="panel agent-activity-panel">
        <div className="workspace-head">
          <div>
            <h3>Последняя активность</h3>
            <span className="overline">РАБОТА СУБАГЕНТОВ</span>
          </div>
          <button className="plain-button">
            Вся история <Icon name="chevron" size={15} />
          </button>
        </div>
        <div className="agent-activity-list">
          {[
            [
              "Frontend Scout",
              "Проанализировал компоненты dashboard и предложил декомпозицию",
              "Astra Frontend",
              "4 мин",
            ],
            [
              "Frontend Scout",
              "Проверил production-сборку после изменения типографики",
              "Astra Frontend",
              "32 мин",
            ],
            [
              "Data Observer",
              "Подготовил отчёт по событиям путешествий за июнь",
              "Nomad Analytics",
              "2 ч",
            ],
          ].map(([agent, action, project, time], index) => (
            <button key={action} onClick={() => toast(`${agent}: результат задачи открыт`)}>
              <span className={`activity-icon a${index}`}>
                <Icon name={index === 1 ? "check" : "sparkle"} size={17} />
              </span>
              <div>
                <strong>{action}</strong>
                <small>
                  {agent} · {project}
                </small>
              </div>
              <time>{time}</time>
              <Icon name="chevron" size={15} />
            </button>
          ))}
        </div>
      </article>

      {creating && (
        <div className="modal-backdrop" onMouseDown={() => setCreating(false)}>
          <div className="modal project-modal" onMouseDown={(event) => event.stopPropagation()}>
            <button
              className="icon-button modal-close"
              onClick={() => setCreating(false)}
              aria-label="Закрыть"
            >
              <Icon name="close" />
            </button>
            <div className="modal-mark">
              <Icon name="terminal" size={24} />
            </div>
            <p className="eyebrow">НОВОЕ ПОДКЛЮЧЕНИЕ</p>
            <h2>Добавить проект</h2>
            <p className="modal-subtitle">
              После создания вы получите персональную команду установки субагента.
            </p>
            <div className="project-form">
              <label>
                <span className="field-label">Название проекта</span>
                <input
                  autoFocus
                  value={projectName}
                  onChange={(event) => setProjectName(event.target.value)}
                  placeholder="Например, Travel Core API"
                />
              </label>
              <label>
                <span className="field-label">URL репозитория</span>
                <input
                  value={repository}
                  onChange={(event) => setRepository(event.target.value)}
                  placeholder="https://github.com/company/project"
                />
              </label>
              <span className="field-label">Окружение</span>
              <div className="environment-switch">
                {["Production", "Staging", "Development"].map((item) => (
                  <button
                    className={environment === item ? "active" : ""}
                    onClick={() => setEnvironment(item)}
                    key={item}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            <button
              className="primary wide"
              disabled={!projectName.trim() || !repository.trim()}
              onClick={createProject}
            >
              Создать и получить команду <Icon name="arrow" size={17} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

type ChatMessage = {
  id: number;
  role: "assistant" | "user";
  text?: string;
  audioUrl?: string;
  audioDuration?: number;
  attachments?: AttachedFile[];
  time: string;
};

type AttachedFile = {
  id: number;
  name: string;
  size: number;
  type: string;
  url: string;
};

function formatDuration(value: number) {
  const minutes = Math.floor(value / 60);
  return `${minutes}:${String(value % 60).padStart(2, "0")}`;
}

function formatFileSize(bytes: number) {
  if (bytes < 1024 * 1024) return `${Math.max(1, Math.round(bytes / 1024))} КБ`;
  return `${(bytes / 1024 / 1024).toFixed(1)} МБ`;
}

function VoiceMessage({ url, duration }: { url: string; duration: number }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const bars = [9, 16, 11, 22, 14, 25, 18, 10, 20, 27, 13, 23, 17, 9, 19, 14, 24, 12, 18, 8];

  function togglePlayback() {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
    } else {
      void audio.play();
    }
  }

  return (
    <div className="voice-message">
      <audio
        ref={audioRef}
        src={url}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => {
          setPlaying(false);
          setProgress(0);
        }}
        onTimeUpdate={(event) => {
          const audio = event.currentTarget;
          setProgress(audio.duration ? audio.currentTime / audio.duration : 0);
        }}
      />
      <button onClick={togglePlayback} aria-label={playing ? "Пауза" : "Воспроизвести"}>
        <Icon name={playing ? "pause" : "play"} size={17} />
      </button>
      <div className="voice-wave" aria-hidden="true">
        {bars.map((height, index) => (
          <i
            className={index / bars.length <= progress ? "active" : ""}
            style={{ height }}
            key={`${height}-${index}`}
          />
        ))}
      </div>
      <span>{formatDuration(duration)}</span>
    </div>
  );
}

function getAstraResponse(message: string) {
  const value = message.toLowerCase();
  if (value.includes("прикреплены файлы")) {
    return "Файлы получены. Я могу использовать их как документы поездки, чеки или материалы для задачи. В демо-режиме содержимое хранится только в этом диалоге.";
  }
  if (value.includes("бюдж") || value.includes("деньг") || value.includes("расход")) {
    return "В июне у вас осталось 84 320 ₽. При текущем темпе расходов к концу месяца сохранится около 18 600 ₽ сверх плана. Могу помочь распределить эту сумму между копилками.";
  }
  if (value.includes("лиссаб") || value.includes("поезд") || value.includes("рейс")) {
    return "До Лиссабона осталось 5 дней. Перелёт и The Lumiares подтверждены, документы готовы. Завтра в 09:45 откроется регистрация на рейс — я напомню.";
  }
  if (value.includes("зада") || value.includes("дел") || value.includes("сегодня")) {
    return "Сегодня в фокусе 3 задачи. Самая срочная — отправить отчёт по проекту до 12:00. После неё советую заняться страховкой для поездки.";
  }
  if (value.includes("накоп") || value.includes("цель") || value.includes("копил")) {
    return "Общий прогресс накоплений — 64%. Вы опережаете план на 12 дней. Ближайшая цель — Исландия: собрано 186 000 ₽ из 260 000 ₽.";
  }
  if (
    value.includes("проект") ||
    value.includes("субагент") ||
    value.includes("рабоч") ||
    value.includes("агент")
  ) {
    return "В «Моих проектах» сейчас 3 подключения. Frontend Scout онлайн и уже изучил Astra Frontend, Backend Navigator ожидает установки, а Data Observer был офлайн последние 2 часа. Могу открыть проект или сформулировать задачу для агента.";
  }
  return "Я изучила ваши планы. Могу проверить поездки, оценить бюджет, расставить приоритеты в задачах или помочь создать новую цель. С чего начнём?";
}

function AstraChat({
  onClose,
  onToast,
}: {
  onClose: () => void;
  onToast: (message: string) => void;
}) {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 1,
      role: "assistant",
      text: "Доброе утро, Алексей. Я собрала всё важное на сегодня. До поездки в Лиссабон осталось 5 дней, а бюджет идёт лучше плана. Чем помочь?",
      time: "09:41",
    },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [recording, setRecording] = useState(false);
  const [recordTime, setRecordTime] = useState(0);
  const [attachments, setAttachments] = useState<AttachedFile[]>([]);
  const [draggingFile, setDraggingFile] = useState(false);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const recordTimeRef = useRef(0);
  const cancelRecordingRef = useRef(false);
  const intervalRef = useRef<number | null>(null);
  const responseTimerRef = useRef<number | null>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing, recording]);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => event.key === "Escape" && onClose();
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [onClose]);

  useEffect(() => {
    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
      if (responseTimerRef.current) window.clearTimeout(responseTimerRef.current);
      streamRef.current?.getTracks().forEach((track) => track.stop());
    };
  }, []);

  function addAssistantResponse(text: string) {
    setTyping(true);
    if (responseTimerRef.current) window.clearTimeout(responseTimerRef.current);
    responseTimerRef.current = window.setTimeout(() => {
      setMessages((current) => [
        ...current,
        {
          id: Date.now(),
          role: "assistant",
          text: getAstraResponse(text),
          time: new Date().toLocaleTimeString("ru-RU", { hour: "2-digit", minute: "2-digit" }),
        },
      ]);
      setTyping(false);
    }, 1100);
  }

  function sendMessage(text = input) {
    const trimmed = text.trim();
    if (!trimmed && !attachments.length) return;
    const sentAttachments = attachments;
    setMessages((current) => [
      ...current,
      {
        id: Date.now(),
        role: "user",
        text: trimmed || undefined,
        attachments: sentAttachments,
        time: new Date().toLocaleTimeString("ru-RU", { hour: "2-digit", minute: "2-digit" }),
      },
    ]);
    setInput("");
    setAttachments([]);
    addAssistantResponse(
      trimmed || `Прикреплены файлы: ${sentAttachments.map((file) => file.name).join(", ")}`,
    );
  }

  function attachFiles(files: FileList | File[]) {
    const selected = Array.from(files);
    const available = Math.max(0, 4 - attachments.length);
    if (!available) {
      onToast("Можно прикрепить не больше 4 файлов");
      return;
    }
    const valid = selected.slice(0, available).filter((file) => {
      if (file.size > 10 * 1024 * 1024) {
        onToast(`${file.name}: максимальный размер файла — 10 МБ`);
        return false;
      }
      return true;
    });
    setAttachments((current) => [
      ...current,
      ...valid.map((file, index) => ({
        id: Date.now() + index,
        name: file.name,
        size: file.size,
        type: file.type,
        url: URL.createObjectURL(file),
      })),
    ]);
    if (fileInputRef.current) fileInputRef.current.value = "";
  }

  async function startRecording() {
    if (!navigator.mediaDevices?.getUserMedia || typeof MediaRecorder === "undefined") {
      onToast("Запись голоса не поддерживается в этом браузере");
      return;
    }
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      streamRef.current = stream;
      mediaRecorderRef.current = recorder;
      chunksRef.current = [];
      cancelRecordingRef.current = false;
      recordTimeRef.current = 0;
      setRecordTime(0);

      recorder.ondataavailable = (event) => {
        if (event.data.size) chunksRef.current.push(event.data);
      };
      recorder.onstop = () => {
        stream.getTracks().forEach((track) => track.stop());
        streamRef.current = null;
        if (!cancelRecordingRef.current && chunksRef.current.length) {
          const blob = new Blob(chunksRef.current, { type: recorder.mimeType || "audio/webm" });
          const audioUrl = URL.createObjectURL(blob);
          setMessages((current) => [
            ...current,
            {
              id: Date.now(),
              role: "user",
              audioUrl,
              audioDuration: Math.max(1, recordTimeRef.current),
              time: new Date().toLocaleTimeString("ru-RU", { hour: "2-digit", minute: "2-digit" }),
            },
          ]);
          addAssistantResponse("голосовое сообщение о моих планах");
        }
      };
      recorder.start();
      setRecording(true);
      intervalRef.current = window.setInterval(() => {
        recordTimeRef.current += 1;
        setRecordTime(recordTimeRef.current);
      }, 1000);
    } catch {
      onToast("Разрешите доступ к микрофону, чтобы записать сообщение");
    }
  }

  function stopRecording(cancel = false) {
    cancelRecordingRef.current = cancel;
    if (intervalRef.current) {
      window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    if (mediaRecorderRef.current?.state === "recording") mediaRecorderRef.current.stop();
    setRecording(false);
  }

  const quickPrompts = [
    "Что важно сегодня?",
    "Как мой бюджет?",
    "Проверь поездку",
    "Что по моим проектам?",
  ];

  return (
    <>
      <button className="chat-dismiss" onClick={onClose} aria-label="Закрыть чат" />
      <aside className="astra-chat" aria-label="Чат с Астрой">
        <header className="chat-header">
          <div className="chat-identity">
            <span className="chat-brand">
              <span className="brand-mark">
                <span />
              </span>
              <i />
            </span>
            <div>
              <strong>Астра</strong>
              <span>Личный помощник · онлайн</span>
            </div>
          </div>
          <div className="chat-header-actions">
            <button
              onClick={() => onToast("История диалога очищается в настройках")}
              aria-label="Меню чата"
            >
              <Icon name="more" size={19} />
            </button>
            <button onClick={onClose} aria-label="Закрыть чат">
              <Icon name="close" size={19} />
            </button>
          </div>
        </header>

        <div className="chat-context">
          <Icon name="sparkle" size={15} />
          <span>Астра учитывает поездки, бюджет, задачи и рабочие проекты</span>
        </div>

        <div className="chat-scroll">
          <div className="chat-day">
            <span>Сегодня</span>
          </div>
          <div className="chat-messages">
            {messages.map((message) => (
              <div className={`chat-row ${message.role}`} key={message.id}>
                {message.role === "assistant" && (
                  <span className="chat-mini-brand">
                    <span className="brand-mark">
                      <span />
                    </span>
                  </span>
                )}
                <div className="chat-bubble">
                  {message.text && <p>{message.text}</p>}
                  {message.attachments && (
                    <div className="message-files">
                      {message.attachments.map((file) =>
                        file.type.startsWith("image/") ? (
                          <a
                            href={file.url}
                            target="_blank"
                            rel="noreferrer"
                            className="message-image"
                            key={file.id}
                          >
                            <img src={file.url} alt={file.name} />
                            <span>{file.name}</span>
                          </a>
                        ) : (
                          <a
                            href={file.url}
                            download={file.name}
                            className="message-file"
                            key={file.id}
                          >
                            <span>
                              <Icon name="file" size={18} />
                            </span>
                            <div>
                              <strong>{file.name}</strong>
                              <small>{formatFileSize(file.size)}</small>
                            </div>
                            <Icon name="arrow" size={15} />
                          </a>
                        ),
                      )}
                    </div>
                  )}
                  {message.audioUrl && (
                    <VoiceMessage url={message.audioUrl} duration={message.audioDuration ?? 1} />
                  )}
                  <time>
                    {message.time}
                    {message.role === "user" && <Icon name="check" size={12} />}
                  </time>
                </div>
              </div>
            ))}
            {typing && (
              <div className="chat-row assistant">
                <span className="chat-mini-brand">
                  <span className="brand-mark">
                    <span />
                  </span>
                </span>
                <div className="typing-bubble">
                  <i />
                  <i />
                  <i />
                </div>
              </div>
            )}
          </div>

          {messages.length < 4 && !recording && (
            <div className="quick-prompts">
              <span>Быстрый вопрос</span>
              <div>
                {quickPrompts.map((prompt) => (
                  <button key={prompt} onClick={() => sendMessage(prompt)}>
                    {prompt}
                  </button>
                ))}
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        <div
          className={`chat-composer ${draggingFile ? "dragging" : ""}`}
          onDragOver={(event) => {
            event.preventDefault();
            setDraggingFile(true);
          }}
          onDragLeave={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget as Node)) setDraggingFile(false);
          }}
          onDrop={(event) => {
            event.preventDefault();
            setDraggingFile(false);
            attachFiles(event.dataTransfer.files);
          }}
        >
          {draggingFile && (
            <div className="file-drop-overlay">
              <Icon name="clip" size={22} />
              <strong>Отпустите файлы здесь</strong>
              <span>До 4 файлов, каждый не больше 10 МБ</span>
            </div>
          )}
          {recording ? (
            <div className="recording-state">
              <button
                className="record-cancel"
                onClick={() => stopRecording(true)}
                aria-label="Отменить запись"
              >
                <Icon name="close" size={18} />
              </button>
              <span className="record-dot" />
              <strong>{formatDuration(recordTime)}</strong>
              <div className="live-wave">
                {Array.from({ length: 18 }, (_, index) => (
                  <i key={index} />
                ))}
              </div>
              <button
                className="record-send"
                onClick={() => stopRecording()}
                aria-label="Отправить запись"
              >
                <Icon name="arrow" size={18} />
              </button>
            </div>
          ) : (
            <>
              {attachments.length > 0 && (
                <div className="attachment-strip">
                  {attachments.map((file) => (
                    <div className="attachment-draft" key={file.id}>
                      {file.type.startsWith("image/") ? (
                        <img src={file.url} alt="" />
                      ) : (
                        <span>
                          <Icon name="file" size={17} />
                        </span>
                      )}
                      <div>
                        <strong>{file.name}</strong>
                        <small>{formatFileSize(file.size)}</small>
                      </div>
                      <button
                        onClick={() =>
                          setAttachments((current) => current.filter((item) => item.id !== file.id))
                        }
                        aria-label={`Удалить ${file.name}`}
                      >
                        <Icon name="close" size={14} />
                      </button>
                    </div>
                  ))}
                </div>
              )}
              <div className="composer-input">
                <input
                  ref={fileInputRef}
                  type="file"
                  multiple
                  accept="image/*,.pdf,.doc,.docx,.xls,.xlsx,.txt,.zip"
                  onChange={(event) => event.target.files && attachFiles(event.target.files)}
                  hidden
                />
                <button
                  className="attach-button"
                  onClick={() => fileInputRef.current?.click()}
                  aria-label="Прикрепить файл"
                >
                  <Icon name="clip" size={18} />
                </button>
                <textarea
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" && !event.shiftKey) {
                      event.preventDefault();
                      sendMessage();
                    }
                  }}
                  rows={1}
                  placeholder="Спросите Астру о чём угодно"
                  aria-label="Сообщение"
                />
                <button
                  className={
                    input.trim() || attachments.length ? "composer-action send" : "composer-action"
                  }
                  onClick={() =>
                    input.trim() || attachments.length ? sendMessage() : void startRecording()
                  }
                  aria-label={
                    input.trim() || attachments.length
                      ? "Отправить"
                      : "Записать голосовое сообщение"
                  }
                >
                  <Icon name={input.trim() || attachments.length ? "arrow" : "mic"} size={19} />
                </button>
              </div>
              <p className="composer-hint">
                <Icon name="mic" size={12} /> Нажмите на микрофон для голосового сообщения
              </p>
            </>
          )}
        </div>
      </aside>
    </>
  );
}

export default function App() {
  const [active, setActive] = useState("Цели и события");
  const [modal, setModal] = useState<PlanKind | null>(null);
  const [notice, setNotice] = useState(false);
  const [planner, setPlanner] = useState(false);
  const [tripMenu, setTripMenu] = useState(false);
  const [toast, setToast] = useState("");
  const [taskDone, setTaskDone] = useState([false, false, true]);
  const [mobileNav, setMobileNav] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [profileMenu, setProfileMenu] = useState(false);
  const [heroSlide, setHeroSlide] = useState(0);
  const [taskView, setTaskView] = useState<TaskView>("Задачи");
  const [tasksExpanded, setTasksExpanded] = useState(false);

  useEffect(() => {
    if (active !== "Главная") return;
    const interval = window.setInterval(
      () => setHeroSlide((value) => (value + 1) % dashboardSlides.length),
      7000,
    );
    return () => window.clearInterval(interval);
  }, [active]);

  function showToast(text: string) {
    setToast(text);
    window.setTimeout(() => setToast(""), 2800);
  }

  return (
    <div className={`app-shell ${collapsed ? "is-collapsed" : ""}`}>
      <aside
        className={`${mobileNav ? "sidebar open" : "sidebar"} ${collapsed ? "collapsed" : ""}`}
      >
        <div className="brand">
          <span className="brand-mark">
            <span />
          </span>
          <strong>Астра</strong>
        </div>
        <button className="mobile-close" onClick={() => setMobileNav(false)}>
          <Icon name="close" />
        </button>
        <button
          className="sidebar-collapse"
          data-tooltip={collapsed ? "Развернуть меню" : "Свернуть меню"}
          onClick={() => setCollapsed((value) => !value)}
          aria-label={collapsed ? "Развернуть меню" : "Свернуть меню"}
        >
          <Icon name="panel" size={18} />
        </button>
        <nav>
          <p className="nav-label">ПРОСТРАНСТВО</p>
          {nav.map(([icon, label]) => {
            if (label === "Дела") {
              return (
                <div className="nav-group" key={label}>
                  <button
                    className={active === label ? "active" : ""}
                    data-tooltip={label}
                    onClick={() => {
                      setActive(label);
                      setTasksExpanded((value) => !value);
                    }}
                  >
                    <Icon name={icon} />
                    <span>{label}</span>
                    <span className="nav-group-meta">
                      <b>5</b>
                      <Icon name="chevron" size={14} />
                    </span>
                  </button>
                  {tasksExpanded && (
                    <div className="nav-submenu">
                      {[
                        ["Задачи", "check"],
                        ["Регулярные задачи", "calendar"],
                        ["Agile", "grid"],
                      ].map(([item, itemIcon]) => (
                        <button
                          className={active === "Дела" && taskView === item ? "active" : ""}
                          onClick={() => {
                            setTaskView(item as TaskView);
                            setActive("Дела");
                            setMobileNav(false);
                          }}
                          key={item}
                        >
                          <Icon name={itemIcon as IconName} size={15} />
                          <span>{item}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            }
            return (
              <button
                key={label}
                className={active === label ? "active" : ""}
                data-tooltip={label}
                onClick={() => {
                  setActive(label);
                  setMobileNav(false);
                }}
              >
                <Icon name={icon} />
                <span>{label}</span>
              </button>
            );
          })}
        </nav>
        <div className="sidebar-bottom">
          <button
            data-tooltip="Настройки"
            className={active === "Настройки" ? "active" : ""}
            onClick={() => {
              setActive("Настройки");
              setMobileNav(false);
            }}
          >
            <Icon name="settings" />
            <span>Настройки</span>
          </button>
          <button
            className={`profile ${profileMenu ? "active" : ""}`}
            data-tooltip="Профиль"
            onClick={() => setProfileMenu((value) => !value)}
          >
            <div className="avatar">АМ</div>
            <div>
              <strong>Алексей Морозов</strong>
              <span>Pro-план</span>
            </div>
            <Icon name="more" />
          </button>
          {profileMenu && (
            <>
              <button
                className="profile-menu-dismiss"
                onClick={() => setProfileMenu(false)}
                aria-label="Закрыть меню профиля"
              />
              <div className="profile-menu-pop">
                <div className="profile-menu-head">
                  <div className="avatar">АМ</div>
                  <div>
                    <strong>Алексей Морозов</strong>
                    <span>alexey@astra.demo</span>
                  </div>
                  <span className="pro-label">PRO</span>
                </div>
                <div className="profile-menu-group">
                  <button
                    onClick={() => {
                      setActive("Настройки");
                      setProfileMenu(false);
                    }}
                  >
                    <span>
                      <Icon name="user" size={17} />
                    </span>
                    <div>
                      <strong>Мой профиль</strong>
                      <small>Личные данные и предпочтения</small>
                    </div>
                    <Icon name="chevron" size={14} />
                  </button>
                  <button
                    onClick={() => {
                      showToast("Управление Pro-планом открыто");
                      setProfileMenu(false);
                    }}
                  >
                    <span>
                      <Icon name="sparkle" size={17} />
                    </span>
                    <div>
                      <strong>Астра Pro</strong>
                      <small>Тариф активен до 16 июля</small>
                    </div>
                    <Icon name="chevron" size={14} />
                  </button>
                </div>
                <div className="profile-menu-group compact">
                  <button
                    onClick={() => {
                      setActive("Настройки");
                      setProfileMenu(false);
                    }}
                  >
                    <Icon name="settings" size={16} />
                    <strong>Настройки</strong>
                  </button>
                  <button
                    onClick={() => {
                      showToast("Центр помощи открыт");
                      setProfileMenu(false);
                    }}
                  >
                    <Icon name="help" size={16} />
                    <strong>Помощь и поддержка</strong>
                  </button>
                </div>
                <button
                  className="profile-logout"
                  onClick={() => {
                    showToast("Выход из демо-профиля");
                    setProfileMenu(false);
                  }}
                >
                  <Icon name="logout" size={16} /> Выйти
                </button>
              </div>
            </>
          )}
        </div>
      </aside>
      {mobileNav && <div className="mobile-overlay" onClick={() => setMobileNav(false)} />}

      <main>
        <header>
          <button className="menu-button" onClick={() => setMobileNav(true)}>
            <Icon name="grid" />
          </button>
          <div className="header-actions">
            <button
              className="icon-button"
              aria-label="Сменить тему"
              onClick={() => showToast("Тема адаптируется к настройкам устройства")}
            >
              <Icon name="sun" />
            </button>
            <div className="notification-wrap">
              <button
                className="icon-button"
                aria-label="Уведомления"
                onClick={() => {
                  setNotice(!notice);
                  setPlanner(false);
                }}
              >
                <Icon name="bell" />
                <i />
              </button>
              {notice && (
                <div className="notice-pop">
                  <span>Напоминание</span>
                  <strong>Регистрация на рейс открывается завтра</strong>
                  <p>Лиссабон · SU 2682</p>
                </div>
              )}
            </div>
            <div className="planner-wrap">
              <button
                className={`primary planner-button ${planner ? "open" : ""}`}
                onClick={() => {
                  setPlanner(!planner);
                  setNotice(false);
                }}
              >
                Запланировать <Icon name="plus" size={18} />
              </button>
              {planner && (
                <>
                  <button
                    className="popover-dismiss"
                    onClick={() => setPlanner(false)}
                    aria-label="Закрыть меню"
                  />
                  <div className="planner-pop">
                    <div className="planner-heading">
                      <span>БЫСТРОЕ ПЛАНИРОВАНИЕ</span>
                      <p>Что добавим в Астру?</p>
                    </div>
                    {[
                      ["booking", "calendar", "Бронирование", "Отель, перелёт или транспорт"],
                      ["event", "sparkle", "Событие", "Поездка, план или чек-лист"],
                      ["task", "check", "Задачу", "Дело в ваш дневной фокус"],
                      ["goal", "wallet", "Цель накопления", "Копилка с комфортным темпом"],
                    ].map(([kind, icon, title, note]) => (
                      <button
                        key={kind}
                        onClick={() => {
                          setPlanner(false);
                          setModal(kind as PlanKind);
                        }}
                      >
                        <span>
                          <Icon name={icon as IconName} size={19} />
                        </span>
                        <div>
                          <strong>{title}</strong>
                          <small>{note}</small>
                        </div>
                        <Icon name="chevron" size={16} />
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </header>

        <div className={`content ${active !== "Главная" ? "inner-content" : ""}`}>
          {active === "Главная" && (
            <>
              <section className="welcome">
                <div>
                  <p className="date">ПОНЕДЕЛЬНИК, 16 ИЮНЯ</p>
                  <h1>Доброе утро, Алексей</h1>
                  <p>Всё важное на сегодня — в одном месте.</p>
                </div>
                <div className="status-pill">
                  <span /> Все системы в норме
                </div>
              </section>

              <section className="hero-grid">
                <article className="trip-card">
                  <img
                    key={dashboardSlides[heroSlide].image}
                    src={dashboardSlides[heroSlide].image}
                    alt={dashboardSlides[heroSlide].alt}
                  />
                  <div className="trip-overlay" />
                  <div className="trip-top">
                    <span>
                      <Icon name={dashboardSlides[heroSlide].icon as IconName} size={17} />
                      {dashboardSlides[heroSlide].kind}
                    </span>
                    <div className="trip-actions">
                      <button
                        aria-label="Предыдущее событие"
                        onClick={() =>
                          setHeroSlide((value) =>
                            value === 0 ? dashboardSlides.length - 1 : value - 1,
                          )
                        }
                      >
                        <Icon name="chevron" size={17} />
                      </button>
                      <button
                        aria-label="Следующее событие"
                        onClick={() =>
                          setHeroSlide((value) => (value + 1) % dashboardSlides.length)
                        }
                      >
                        <Icon name="chevron" size={17} />
                      </button>
                      <button
                        aria-label="Меню события"
                        onClick={() => setTripMenu((value) => !value)}
                        className={tripMenu ? "active" : ""}
                      >
                        <Icon name="more" />
                      </button>
                    </div>
                    {tripMenu && (
                      <div className="trip-pop">
                        <button onClick={() => showToast("Редактирование события открыто")}>
                          Редактировать
                        </button>
                        <button onClick={() => showToast("Ссылка на событие скопирована")}>
                          Поделиться
                        </button>
                        <button onClick={() => showToast("Напоминания включены")}>
                          Напоминания
                        </button>
                      </div>
                    )}
                  </div>
                  <div className="trip-content">
                    <div>
                      <span className="trip-date">{dashboardSlides[heroSlide].date}</span>
                      <h2>{dashboardSlides[heroSlide].title}</h2>
                      <p>{dashboardSlides[heroSlide].subtitle}</p>
                    </div>
                    <button
                      className="glass-button"
                      onClick={() =>
                        showToast(`${dashboardSlides[heroSlide].title}: детали открыты`)
                      }
                    >
                      {dashboardSlides[heroSlide].action} <Icon name="arrow" size={18} />
                    </button>
                  </div>
                  <div className="hero-dots">
                    {dashboardSlides.map((slide, index) => (
                      <button
                        className={heroSlide === index ? "active" : ""}
                        onClick={() => setHeroSlide(index)}
                        aria-label={`Показать: ${slide.title}`}
                        key={slide.title}
                      />
                    ))}
                  </div>
                  <div className="trip-footer">
                    <div>
                      <span className="trip-icon">
                        <Icon name={dashboardSlides[heroSlide].first[0] as IconName} size={17} />
                      </span>
                      <p>
                        <strong>{dashboardSlides[heroSlide].first[1]}</strong>
                        <small>{dashboardSlides[heroSlide].first[2]}</small>
                      </p>
                    </div>
                    <div>
                      <span className="trip-icon">
                        <Icon name={dashboardSlides[heroSlide].second[0] as IconName} size={17} />
                      </span>
                      <p>
                        <strong>{dashboardSlides[heroSlide].second[1]}</strong>
                        <small>{dashboardSlides[heroSlide].second[2]}</small>
                      </p>
                    </div>
                    <div className="trip-weather">
                      <strong>{dashboardSlides[heroSlide].aside[0]}</strong>
                      <span>{dashboardSlides[heroSlide].aside[1]}</span>
                    </div>
                  </div>
                </article>

                <article className="panel rentals-widget hero-rentals">
                  <div className="widget-heading">
                    <div>
                      <h3>Активные аренды</h3>
                      <span className="overline">ВРЕМЯ ПОД КОНТРОЛЕМ</span>
                    </div>
                    <button className="plain-button" onClick={() => setActive("Бронирования")}>
                      Все <Icon name="chevron" size={15} />
                    </button>
                  </div>
                  <div className="rentals-list">
                    <RentalTimer
                      icon="hotel"
                      title="The Lumiares"
                      note="Выезд 28 июня · до 11:00"
                      hours={134}
                      progress={68}
                    />
                    <RentalTimer
                      icon="bike"
                      title="Lisboa Bikes · City"
                      note="Вернуть в Praça do Comércio"
                      hours={28}
                      progress={88}
                      urgent
                    />
                  </div>
                  <div className="rental-reminder">
                    <Icon name="bell" size={16} />
                    <span>Напомним за 2 часа до завершения каждой аренды</span>
                  </div>
                </article>
              </section>

              <DashboardWidgets
                taskDone={taskDone}
                setTaskDone={setTaskDone}
                onTask={() => setModal("task")}
                onExpense={() => setModal("expense")}
                openSection={(section) => {
                  setActive(section);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              />
            </>
          )}
          {active === "Бронирования" && (
            <BookingsPage plan={() => setModal("booking")} toast={showToast} />
          )}
          {active === "Бюджет" && <BudgetPage toast={showToast} />}
          {active === "Цели и события" && (
            <EventsPage plan={() => setModal("event")} toast={showToast} />
          )}
          {active === "Дела" && (
            <TasksPage plan={() => setModal("task")} toast={showToast} view={taskView} />
          )}
          {active === "Мои проекты" && <WorkspacePage toast={showToast} />}
          {active === "Копилка" && <SavingsPage plan={() => setModal("goal")} toast={showToast} />}
          {active === "Настройки" && <SettingsPage toast={showToast} />}
        </div>
      </main>

      <button
        className={`astra-fab ${chatOpen ? "active" : ""}`}
        aria-label="Спросить Астру"
        onClick={() => setChatOpen((value) => !value)}
      >
        <span className="brand-mark">
          <span />
        </span>
        <i>Спросить Астру</i>
      </button>
      {chatOpen && <AstraChat onClose={() => setChatOpen(false)} onToast={showToast} />}
      {modal && (
        <Modal
          kind={modal}
          onClose={() => setModal(null)}
          onCreated={() => {
            const success = {
              booking: "Аренда запланирована",
              event: "Событие запланировано",
              task: "Задача добавлена",
              goal: "Цель накопления создана",
              expense: "Расход добавлен в бюджет",
            }[modal];
            setModal(null);
            showToast(success);
          }}
        />
      )}
      {toast && (
        <div className="toast">
          <Icon name="check" size={18} />
          {toast}
        </div>
      )}
    </div>
  );
}

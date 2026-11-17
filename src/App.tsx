import { useEffect, useState, type ReactNode } from "react";

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
  | "sun";

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

type PlanKind = "booking" | "event" | "task" | "goal";

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
    eyebrow: "НОВОЕ БРОНИРОВАНИЕ",
    title: "Добавить в поездку",
    subtitle: "Все детали будут собраны в одном месте, а Астра напомнит о важных сроках.",
    icon: "calendar",
    placeholder: "Например, The Lumiares",
    button: "Сохранить бронирование",
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
  const [type, setType] = useState("Отель");
  const [title, setTitle] = useState("");
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
              ["Отель", "hotel"],
              ["Перелёт", "plane"],
              ["Транспорт", "train"],
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
            kind === "booking" && type !== "Отель" ? "Введите детали" : content.placeholder
          }
        />
        <div className="field-grid">
          <div>
            <label className="field-label">Дата начала</label>
            <input type="date" defaultValue="2025-06-21" />
          </div>
          <div>
            <label className="field-label">{kind === "task" ? "Время" : "Бюджет"}</label>
            <input placeholder="0 ₽" />
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

function BookingsPage({ plan, toast }: { plan: () => void; toast: (text: string) => void }) {
  const [filter, setFilter] = useState("Все");
  return (
    <div className="section-page">
      <PageTitle
        label="ПУТЕШЕСТВИЯ"
        title="Бронирования"
        description="Маршруты, билеты и проживание — с напоминаниями и документами."
        action={
          <button className="primary page-action" onClick={plan}>
            Новое бронирование <Icon name="plus" size={17} />
          </button>
        }
      />
      <div className="stats-row">
        <StatCard label="Активные поездки" value="2" note="Ближайшая через 5 дней" icon="plane" />
        <StatCard
          label="Бронирования"
          value="7"
          note="Все подтверждены"
          icon="calendar"
          tone="blue"
        />
        <StatCard
          label="Потрачено в июне"
          value="86 400 ₽"
          note="На 12% ниже плана"
          icon="wallet"
          tone="orange"
        />
        <StatCard label="Документы" value="9 / 9" note="Всё готово" icon="check" tone="purple" />
      </div>
      <div className="section-grid bookings-layout">
        <section className="panel workspace-panel">
          <div className="workspace-head">
            <div>
              <span className="overline">БЛИЖАЙШАЯ ПОЕЗДКА</span>
              <h3>Лиссабон · 21–28 июня</h3>
            </div>
            <div className="segmented">
              {["Все", "Транспорт", "Жильё"].map((item) => (
                <button
                  className={filter === item ? "active" : ""}
                  onClick={() => setFilter(item)}
                  key={item}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <div className="travel-timeline">
            {[
              [
                "21 июн",
                "plane",
                "Перелёт в Лиссабон",
                "SU 2682 · SVO → LIS",
                "09:45",
                "Подтверждено",
              ],
              ["21 июн", "hotel", "The Lumiares", "Rua do Diário de Notícias", "15:00", "Оплачено"],
              [
                "24 июн",
                "calendar",
                "Коворкинг Second Home",
                "Дневной пропуск · 3 дня",
                "09:00",
                "В календаре",
              ],
              [
                "28 июн",
                "plane",
                "Обратный перелёт",
                "SU 2683 · LIS → SVO",
                "18:20",
                "Подтверждено",
              ],
            ]
              .filter(
                (item) =>
                  filter === "Все" ||
                  (filter === "Транспорт" ? item[1] === "plane" : item[1] === "hotel"),
              )
              .map(([date, icon, title, note, time, status]) => (
                <button
                  className="timeline-item"
                  key={title}
                  onClick={() => toast(`${title}: детали открыты`)}
                >
                  <time>{date}</time>
                  <span className="timeline-icon">
                    <Icon name={icon as IconName} size={18} />
                  </span>
                  <div>
                    <strong>{title}</strong>
                    <small>{note}</small>
                  </div>
                  <div className="timeline-meta">
                    <strong>{time}</strong>
                    <span>{status}</span>
                  </div>
                  <Icon name="chevron" size={17} />
                </button>
              ))}
          </div>
        </section>
        <aside className="page-aside">
          <article className="panel mini-map">
            <div className="map-art">
              <span className="map-route" />
              <i className="pin one" />
              <i className="pin two" />
            </div>
            <div>
              <span className="overline">МАРШРУТ</span>
              <h3>Москва → Лиссабон</h3>
              <p>4 390 км · 5 ч 35 мин</p>
            </div>
          </article>
          <article className="panel documents">
            <div className="panel-head">
              <div>
                <span className="overline">ДОКУМЕНТЫ</span>
                <h3>Готовность поездки</h3>
              </div>
              <strong>100%</strong>
            </div>
            {["Билеты", "Страховка", "Бронь отеля"].map((item) => (
              <button key={item} onClick={() => toast(`${item}: документ открыт`)}>
                <Icon name="check" size={17} />
                <span>{item}</span>
                <Icon name="chevron" size={15} />
              </button>
            ))}
          </article>
        </aside>
      </div>
    </div>
  );
}

function BudgetPage({ toast }: { toast: (text: string) => void }) {
  const [period, setPeriod] = useState("Месяц");
  return (
    <div className="section-page">
      <PageTitle
        label="ФИНАНСЫ · ИЮНЬ"
        title="Бюджет"
        description="Планируйте доходы, контролируйте расходы и сохраняйте финансовый ритм."
        action={
          <div className="segmented page-segment">
            {["Месяц", "Квартал", "Год"].map((item) => (
              <button
                className={period === item ? "active" : ""}
                onClick={() => setPeriod(item)}
                key={item}
              >
                {item}
              </button>
            ))}
          </div>
        }
      />
      <div className="stats-row">
        <StatCard label="Доходы" value="245 000 ₽" note="+8% к прошлому месяцу" icon="briefcase" />
        <StatCard
          label="Расходы"
          value="179 180 ₽"
          note="68% месячного плана"
          icon="wallet"
          tone="orange"
        />
        <StatCard
          label="Свободно"
          value="65 820 ₽"
          note="После всех обязательств"
          icon="sparkle"
          tone="blue"
        />
        <StatCard
          label="Регулярные"
          value="72 400 ₽"
          note="Следующий платёж 18 июня"
          icon="calendar"
          tone="purple"
        />
      </div>
      <div className="section-grid budget-layout">
        <article className="panel workspace-panel chart-panel">
          <div className="workspace-head">
            <div>
              <span className="overline">ПЛАН И ФАКТ</span>
              <h3>Динамика месяца</h3>
            </div>
            <div className="chart-legend">
              <span>
                <i /> Доход
              </span>
              <span>
                <i /> Расход
              </span>
            </div>
          </div>
          <div className="balance-chart">
            <div className="chart-scale">
              <span>250к</span>
              <span>125к</span>
              <span>0</span>
            </div>
            <svg
              viewBox="0 0 700 210"
              preserveAspectRatio="none"
              aria-label="График доходов и расходов"
            >
              <defs>
                <linearGradient id="area" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#5e8772" stopOpacity=".25" />
                  <stop offset="1" stopColor="#5e8772" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path className="chart-grid-line" d="M0 30H700M0 105H700M0 180H700" />
              <path
                className="income-area"
                d="M0 174 C80 165 90 150 145 148 S220 50 280 52 S390 50 430 47 S530 34 700 30 L700 180 L0 180Z"
              />
              <path
                className="income-line"
                d="M0 174 C80 165 90 150 145 148 S220 50 280 52 S390 50 430 47 S530 34 700 30"
              />
              <path
                className="expense-line"
                d="M0 178 C90 165 120 155 170 142 S270 128 330 114 S450 96 510 82 S620 67 700 58"
              />
            </svg>
            <div className="chart-days">
              <span>1 июн</span>
              <span>8 июн</span>
              <span>16 июн</span>
              <span>24 июн</span>
              <span>30 июн</span>
            </div>
          </div>
          <div className="astra-callout">
            <Icon name="sparkle" size={19} />
            <div>
              <strong>Прогноз Астры</strong>
              <p>К концу месяца баланс составит около 84 300 ₽ — на 18 600 ₽ выше цели.</p>
            </div>
            <button onClick={() => toast("Открыт финансовый прогноз")}>Посмотреть</button>
          </div>
        </article>
        <article className="panel workspace-panel categories-panel">
          <div className="workspace-head">
            <div>
              <span className="overline">КАТЕГОРИИ</span>
              <h3>Расходы по плану</h3>
            </div>
            <button className="round-plus" onClick={() => toast("Создание категории открыто")}>
              <Icon name="plus" size={17} />
            </button>
          </div>
          {[
            ["Жильё", "82%", "64 200 ₽", "78 000 ₽", "purple"],
            ["Еда", "54%", "21 700 ₽", "40 000 ₽", "orange"],
            ["Транспорт", "39%", "11 800 ₽", "30 000 ₽", "blue"],
            ["Подписки", "91%", "9 120 ₽", "10 000 ₽", "green"],
          ].map(([name, width, value, total, tone]) => (
            <button
              className="category-row"
              key={name}
              onClick={() => toast(`${name}: аналитика открыта`)}
            >
              <div>
                <strong>{name}</strong>
                <span>
                  {value} <small>из {total}</small>
                </span>
              </div>
              <i>
                <em className={tone} style={{ width }} />
              </i>
            </button>
          ))}
        </article>
      </div>
      <article className="panel recurring-panel">
        <div className="workspace-head">
          <div>
            <span className="overline">РЕГУЛЯРНЫЕ ОПЕРАЦИИ</span>
            <h3>Ближайшие списания и доходы</h3>
          </div>
          <button className="plain-button" onClick={() => toast("Календарь платежей открыт")}>
            Календарь <Icon name="chevron" size={16} />
          </button>
        </div>
        <div className="recurring-grid">
          {[
            ["18 июн", "Figma Professional", "Подписки", "− 1 490 ₽"],
            ["21 июн", "Аренда квартиры", "Жильё", "− 62 000 ₽"],
            ["25 июн", "Аванс", "Доход", "+ 95 000 ₽"],
          ].map(([date, title, note, value]) => (
            <button key={title} onClick={() => toast(`${title}: операция открыта`)}>
              <time>{date}</time>
              <div>
                <strong>{title}</strong>
                <small>{note}</small>
              </div>
              <b>{value}</b>
            </button>
          ))}
        </div>
      </article>
    </div>
  );
}

function EventsPage({ plan, toast }: { plan: () => void; toast: (text: string) => void }) {
  const [checks, setChecks] = useState([true, true, false, false]);
  return (
    <div className="section-page">
      <PageTitle
        label="ПЛАНЫ И ВПЕЧАТЛЕНИЯ"
        title="Цели и события"
        description="Превращайте большие планы в понятные шаги, сроки и бюджеты."
        action={
          <button className="primary page-action" onClick={plan}>
            Создать событие <Icon name="plus" size={17} />
          </button>
        }
      />
      <article className="event-feature panel">
        <img
          src="https://images.unsplash.com/photo-1500043357865-c6b8827edf10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=85&w=1400"
          alt="Побережье Исландии"
        />
        <div className="event-shade" />
        <div className="event-copy">
          <span className="overline">ГЛАВНОЕ СОБЫТИЕ · СЕНТЯБРЬ</span>
          <h2>Road trip по Исландии</h2>
          <p>12 дней · 4 участника · маршрут готов на 72%</p>
          <div className="event-progress">
            <i>
              <em />
            </i>
            <span>72%</span>
          </div>
        </div>
        <div className="event-stats">
          <div>
            <span>До события</span>
            <strong>78 дней</strong>
          </div>
          <div>
            <span>Накоплено</span>
            <strong>186 000 ₽</strong>
          </div>
          <div>
            <span>Чек-лист</span>
            <strong>8 из 12</strong>
          </div>
          <button className="glass-button" onClick={() => toast("План события открыт")}>
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
            <span className="soft-badge">{checks.filter(Boolean).length} / 4</span>
          </div>
          <div className="event-checklist">
            {[
              ["Забронировать автомобиль", "До 20 июня", "Транспорт"],
              ["Согласовать маршрут", "До 24 июня", "Маршрут"],
              ["Купить страховку", "До 15 августа", "Документы"],
              ["Собрать список экипировки", "До 20 августа", "Подготовка"],
            ].map(([title, date, tag], index) => (
              <button
                className={checks[index] ? "done" : ""}
                key={title}
                onClick={() => setChecks((v) => v.map((x, i) => (i === index ? !x : x)))}
              >
                <span className="task-check">
                  {checks[index] && <Icon name="check" size={17} />}
                </span>
                <div>
                  <strong>{title}</strong>
                  <small>{date}</small>
                </div>
                <span className="soft-badge">{tag}</span>
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
    </div>
  );
}

function TasksPage({ plan, toast }: { plan: () => void; toast: (text: string) => void }) {
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

export default function App() {
  const [active, setActive] = useState("Главная");
  const [modal, setModal] = useState<PlanKind | null>(null);
  const [notice, setNotice] = useState(false);
  const [planner, setPlanner] = useState(false);
  const [tripMenu, setTripMenu] = useState(false);
  const [toast, setToast] = useState("");
  const [taskDone, setTaskDone] = useState([false, false, true]);
  const [mobileNav, setMobileNav] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

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
        <nav>
          <p className="nav-label">ПРОСТРАНСТВО</p>
          {nav.map(([icon, label]) => (
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
              {label === "Дела" && <b>5</b>}
            </button>
          ))}
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
            className="profile"
            data-tooltip="Профиль"
            onClick={() => showToast("Профиль Алексея")}
          >
            <div className="avatar">АМ</div>
            <div>
              <strong>Алексей Морозов</strong>
              <span>Pro-план</span>
            </div>
            <Icon name="more" />
          </button>
        </div>
      </aside>
      {mobileNav && <div className="mobile-overlay" onClick={() => setMobileNav(false)} />}

      <main>
        <header>
          <button className="menu-button" onClick={() => setMobileNav(true)}>
            <Icon name="grid" />
          </button>
          <button
            className="sidebar-toggle"
            onClick={() => setCollapsed((value) => !value)}
            aria-label={collapsed ? "Развернуть меню" : "Свернуть меню"}
          >
            <Icon name="chevron" size={18} />
            <span>{collapsed ? "Развернуть меню" : "Свернуть меню"}</span>
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
                    src="https://images.unsplash.com/photo-1525207934214-58e69a8f8a3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=85&w=1400"
                    alt="Вид на крыши Лиссабона"
                  />
                  <div className="trip-overlay" />
                  <div className="trip-top">
                    <span>
                      <Icon name="plane" size={17} /> БЛИЖАЙШАЯ ПОЕЗДКА
                    </span>
                    <button
                      aria-label="Меню поездки"
                      onClick={() => setTripMenu((value) => !value)}
                      className={tripMenu ? "active" : ""}
                    >
                      <Icon name="more" />
                    </button>
                    {tripMenu && (
                      <div className="trip-pop">
                        <button onClick={() => showToast("Редактирование поездки открыто")}>
                          Редактировать
                        </button>
                        <button onClick={() => showToast("Ссылка на поездку скопирована")}>
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
                      <span className="trip-date">21 — 28 ИЮНЯ · 7 ДНЕЙ</span>
                      <h2>Лиссабон</h2>
                      <p>Португалия</p>
                    </div>
                    <button
                      className="glass-button"
                      onClick={() => showToast("Маршрут поездки открыт")}
                    >
                      Открыть поездку <Icon name="arrow" size={18} />
                    </button>
                  </div>
                  <div className="trip-footer">
                    <div>
                      <span className="trip-icon">
                        <Icon name="plane" size={17} />
                      </span>
                      <p>
                        <strong>SU 2682</strong>
                        <small>21 июн · 09:45</small>
                      </p>
                    </div>
                    <div>
                      <span className="trip-icon">
                        <Icon name="hotel" size={17} />
                      </span>
                      <p>
                        <strong>The Lumiares</strong>
                        <small>Заселение · 15:00</small>
                      </p>
                    </div>
                    <div className="trip-weather">
                      <strong>24°</strong>
                      <span>Солнечно</span>
                    </div>
                  </div>
                </article>

                <article className="budget-card panel">
                  <div className="panel-head">
                    <div>
                      <span className="overline">БЮДЖЕТ · ИЮНЬ</span>
                      <h3>Финансовый ритм</h3>
                    </div>
                    <button
                      className="plain-button"
                      onClick={() => showToast("Открыт подробный бюджет")}
                    >
                      Подробнее <Icon name="chevron" size={16} />
                    </button>
                  </div>
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
                  <div className="budget-insight">
                    <Icon name="sparkle" size={17} />
                    <span>
                      <strong>В отличном темпе</strong>При текущих расходах останется ~18 600 ₽
                    </span>
                  </div>
                </article>
              </section>

              <section className="lower-grid">
                <article className="panel transactions">
                  <div className="panel-head">
                    <div>
                      <span className="overline">ПОСЛЕДНИЕ ОПЕРАЦИИ</span>
                      <h3>Движение денег</h3>
                    </div>
                    <button
                      className="plain-button"
                      onClick={() => showToast("Все операции загружены")}
                    >
                      Все операции <Icon name="chevron" size={16} />
                    </button>
                  </div>
                  <div className="transaction-list">
                    {transactions.map((item) => (
                      <div className="transaction" key={item.title}>
                        <span className={`transaction-icon ${item.color}`}>
                          <Icon name={item.icon} size={18} />
                        </span>
                        <div>
                          <strong>{item.title}</strong>
                          <small>{item.note}</small>
                        </div>
                        <b className={item.positive ? "positive" : ""}>{item.value}</b>
                      </div>
                    ))}
                  </div>
                </article>

                <article className="panel tasks">
                  <div className="panel-head">
                    <div>
                      <span className="overline">СЕГОДНЯ · 3 ЗАДАЧИ</span>
                      <h3>Фокус дня</h3>
                    </div>
                    <button
                      className="round-plus"
                      onClick={() => showToast("Новая задача добавлена в план")}
                    >
                      <Icon name="plus" size={18} />
                    </button>
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
                        onClick={() => setTaskDone((v) => v.map((x, i) => (i === index ? !x : x)))}
                      >
                        <span className="task-check">
                          {taskDone[index] && <Icon name="check" size={17} />}
                        </span>
                        <span>
                          <strong>{title}</strong>
                          <small>{note}</small>
                        </span>
                        <Icon name="more" size={18} />
                      </button>
                    ))}
                  </div>
                  <button
                    className="task-footer"
                    onClick={() => {
                      setActive("Дела");
                      showToast("Открыта agile-доска");
                    }}
                  >
                    Перейти к доске дел <Icon name="arrow" size={17} />
                  </button>
                </article>
              </section>
            </>
          )}
          {active === "Бронирования" && (
            <BookingsPage plan={() => setModal("booking")} toast={showToast} />
          )}
          {active === "Бюджет" && <BudgetPage toast={showToast} />}
          {active === "Цели и события" && (
            <EventsPage plan={() => setModal("event")} toast={showToast} />
          )}
          {active === "Дела" && <TasksPage plan={() => setModal("task")} toast={showToast} />}
          {active === "Копилка" && <SavingsPage plan={() => setModal("goal")} toast={showToast} />}
          {active === "Настройки" && <SettingsPage toast={showToast} />}
        </div>
      </main>

      <button
        className="astra-fab"
        aria-label="Спросить Астру"
        onClick={() => showToast("Астра слушает. Чем помочь?")}
      >
        <span className="brand-mark">
          <span />
        </span>
        <i>Спросить Астру</i>
      </button>
      {modal && (
        <Modal
          kind={modal}
          onClose={() => setModal(null)}
          onCreated={() => {
            const success = {
              booking: "Бронирование сохранено",
              event: "Событие запланировано",
              task: "Задача добавлена",
              goal: "Цель накопления создана",
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

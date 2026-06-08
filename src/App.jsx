import React from "react";
import "./App.css";

const MEALS = [
  { id: "kimchi-fried-rice", name: "Kimchi Fried Rice Night", emoji: "🍳", cuisine: "Korean-ish", mode: "cook", time: 15, effort: "low", budget: "cheap", vibe: "comfort", diet: ["vegetarian-flex"], ingredients: ["rice", "kimchi", "egg", "scallions", "soy sauce"], steps: ["Crisp leftover rice in a hot pan.", "Stir in kimchi and soy sauce.", "Top with a fried egg and scallions."], why: "Fast, punchy, and perfect when leftovers need a glow-up.", weight: 9 },
  { id: "taco-bowls", name: "Build-Your-Own Taco Bowls", emoji: "🌮", cuisine: "Mexican-inspired", mode: "cook", time: 30, effort: "low", budget: "cheap", vibe: "fun", diet: ["vegetarian-flex", "gluten-free"], ingredients: ["rice", "beans", "corn", "salsa", "avocado", "protein"], steps: ["Warm rice, beans, corn, and your protein.", "Set out toppings like salsa and avocado.", "Let everyone build their own bowl."], why: "Low-stress, customizable, and friendly for mixed preferences.", weight: 8 },
  { id: "miso-butter-pasta", name: "Miso Butter Noodles", emoji: "🍜", cuisine: "Japanese-inspired", mode: "cook", time: 15, effort: "low", budget: "cheap", vibe: "comfort", diet: ["vegetarian-flex"], ingredients: ["noodles", "miso", "butter", "garlic", "mushrooms"], steps: ["Boil noodles and save a splash of water.", "Melt butter with garlic and miso.", "Toss noodles with sauce and mushrooms."], why: "Creamy, savory, and feels bigger than the effort it takes.", weight: 8 },
  { id: "sheet-pan-sausage-veg", name: "Sheet Pan Sausage + Veg", emoji: "🥔", cuisine: "American", mode: "cook", time: 45, effort: "low", budget: "medium", vibe: "hearty", diet: ["gluten-free"], ingredients: ["sausage", "potatoes", "bell pepper", "onion", "mustard"], steps: ["Chop everything into bite-size pieces.", "Roast on one pan until browned.", "Finish with mustard or a quick yogurt sauce."], why: "One pan, minimal dishes, and reliable comfort-food energy.", weight: 7 },
  { id: "thai-curry", name: "Weeknight Coconut Curry", emoji: "🥥", cuisine: "Thai-inspired", mode: "cook", time: 30, effort: "medium", budget: "medium", vibe: "cozy", diet: ["vegetarian-flex", "gluten-free"], ingredients: ["curry paste", "coconut milk", "vegetables", "rice", "tofu or chicken"], steps: ["Bloom curry paste in a pot.", "Add coconut milk, vegetables, and protein.", "Simmer and serve over rice."], why: "Big flavor, flexible ingredients, and great leftovers.", weight: 7 },
  { id: "breakfast-for-dinner", name: "Breakfast-for-Dinner Board", emoji: "🥞", cuisine: "Anything goes", mode: "cook", time: 20, effort: "low", budget: "cheap", vibe: "fun", diet: ["vegetarian-flex"], ingredients: ["eggs", "toast", "fruit", "hash browns", "hot sauce"], steps: ["Make eggs your favorite way.", "Toast bread or crisp potatoes.", "Add fruit and sauces like a tiny dinner board."], why: "Playful, cheap, and perfect when nobody wants a serious meal.", weight: 6 },
  { id: "leftover-remix-wraps", name: "Leftover Remix Wraps", emoji: "🌯", cuisine: "Pantry", mode: "leftovers", time: 15, effort: "low", budget: "cheap", vibe: "practical", diet: ["vegetarian-flex"], ingredients: ["tortillas", "leftover protein", "greens", "sauce", "cheese"], steps: ["Warm tortillas.", "Add leftovers, greens, and sauce.", "Toast seam-side down until crisp."], why: "Turns random fridge pieces into an actual dinner.", weight: 9 },
  { id: "soup-and-grilled-cheese", name: "Soup + Crispy Grilled Cheese", emoji: "🥣", cuisine: "Comfort", mode: "cheap", time: 20, effort: "low", budget: "cheap", vibe: "comfort", diet: ["vegetarian-flex"], ingredients: ["tomato soup", "bread", "cheese", "butter", "pickles"], steps: ["Heat soup while the pan warms.", "Grill cheese low and slow.", "Serve with pickles or chili crisp."], why: "Classic, cozy, and hard to mess up.", weight: 7 },
  { id: "sushi-bake-bowls", name: "Sushi Bake Bowls", emoji: "🍣", cuisine: "Japanese-inspired", mode: "cook", time: 30, effort: "medium", budget: "medium", vibe: "fun", diet: ["gluten-free"], ingredients: ["rice", "salmon or tuna", "mayo", "cucumber", "seaweed"], steps: ["Season rice and prep toppings.", "Warm fish with a little mayo and sauce.", "Scoop into seaweed with cucumber."], why: "Feels like takeout, but uses pantry-friendly pieces.", weight: 5 },
  { id: "takeout-pizza-plus-salad", name: "Pizza + Big Crunchy Salad", emoji: "🍕", cuisine: "Takeout", mode: "takeout", time: 30, effort: "low", budget: "medium", vibe: "comfort", diet: ["vegetarian-flex"], ingredients: ["pizza", "greens", "cucumber", "vinaigrette", "parmesan"], steps: ["Order or heat pizza.", "Make a giant acidic salad.", "Eat together so dinner feels balanced."], why: "A practical takeout night that still feels intentional.", weight: 6 },
  { id: "mediterranean-plate", name: "Mediterranean Snack Plate", emoji: "🫓", cuisine: "Mediterranean", mode: "healthy", time: 15, effort: "low", budget: "medium", vibe: "fresh", diet: ["vegetarian-flex"], ingredients: ["hummus", "pita", "cucumber", "olives", "feta", "chickpeas"], steps: ["Slice vegetables and warm pita.", "Plate hummus, chickpeas, and feta.", "Add olive oil, pepper, and lemon."], why: "Fresh, fast, and satisfying without cooking much.", weight: 8 },
  { id: "burger-salad-night", name: "Burger Salad Night", emoji: "🍔", cuisine: "American", mode: "healthy", time: 25, effort: "medium", budget: "medium", vibe: "hearty", diet: ["gluten-free"], ingredients: ["ground beef or veggie patty", "lettuce", "pickles", "tomatoes", "special sauce"], steps: ["Cook patties or veggie patties.", "Chop salad toppings.", "Finish with burger sauce and pickles."], why: "Scratches the burger itch while staying lighter.", weight: 6 },
];

const APP_NAME = "CraveRoll";
const STORAGE_PREFIX = "craveroll";
const LEGACY_STORAGE_PREFIX = "dinner-dice";

const DEFAULT_FILTERS = { mode: "surprise", maxTime: "any", effort: "any", budget: "any", ingredient: "" };
const modeOptions = [
  { value: "surprise", label: "Surprise me", icon: "🎲" },
  { value: "cook", label: "Cook", icon: "🍳" },
  { value: "takeout", label: "Takeout", icon: "🥡" },
  { value: "leftovers", label: "Leftovers", icon: "♻️" },
  { value: "cheap", label: "Cheap", icon: "💸" },
  { value: "healthy", label: "Healthy-ish", icon: "🥗" },
];

function readStorage(key, fallback) {
  try {
    const saved = window.localStorage.getItem(key) ?? window.localStorage.getItem(key.replace(STORAGE_PREFIX, LEGACY_STORAGE_PREFIX));
    return saved ? JSON.parse(saved) : fallback;
  } catch {
    return fallback;
  }
}

function writeStorage(key, value) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // LocalStorage can be unavailable in private/test environments.
  }
}

export function filterMeals(meals, filters, rejectedIds = []) {
  const ingredient = filters.ingredient.trim().toLowerCase();
  return meals.filter((meal) => {
    if (rejectedIds.includes(meal.id)) return false;
    if (filters.mode !== "surprise" && meal.mode !== filters.mode && meal.vibe !== filters.mode) return false;
    if (filters.maxTime !== "any" && meal.time > Number(filters.maxTime)) return false;
    if (filters.effort !== "any" && meal.effort !== filters.effort) return false;
    if (filters.budget !== "any" && meal.budget !== filters.budget) return false;
    if (ingredient && !meal.ingredients.some((item) => item.toLowerCase().includes(ingredient))) return false;
    return true;
  });
}

export function pickWeightedMeal(meals, recentIds = []) {
  if (!meals.length) return null;
  const weighted = meals.flatMap((meal) => {
    const recentPenalty = recentIds.includes(meal.id) ? 0.45 : 1;
    const entries = Math.max(1, Math.round(meal.weight * recentPenalty));
    return Array(entries).fill(meal);
  });
  return weighted[Math.floor(Math.random() * weighted.length)];
}

function App() {
  const [filters, setFilters] = React.useState(DEFAULT_FILTERS);
  const [selectedMeal, setSelectedMeal] = React.useState(() => MEALS[0]);
  const [favorites, setFavorites] = React.useState(() => readStorage(`${STORAGE_PREFIX}:favorites`, []));
  const [rejected, setRejected] = React.useState(() => readStorage(`${STORAGE_PREFIX}:not-tonight`, []));
  const [recent, setRecent] = React.useState(() => readStorage(`${STORAGE_PREFIX}:recent`, []));
  const [rolling, setRolling] = React.useState(false);
  const [message, setMessage] = React.useState("Ready when your cravings are loud and your brain is offline.");
  const [plannedMealId, setPlannedMealId] = React.useState(() => readStorage(`${STORAGE_PREFIX}:planned`, null));

  React.useEffect(() => writeStorage(`${STORAGE_PREFIX}:favorites`, favorites), [favorites]);
  React.useEffect(() => writeStorage(`${STORAGE_PREFIX}:not-tonight`, rejected), [rejected]);
  React.useEffect(() => writeStorage(`${STORAGE_PREFIX}:recent`, recent), [recent]);
  React.useEffect(() => writeStorage(`${STORAGE_PREFIX}:planned`, plannedMealId), [plannedMealId]);

  const candidates = React.useMemo(() => filterMeals(MEALS, filters, rejected), [filters, rejected]);
  const favoriteMeals = MEALS.filter((meal) => favorites.includes(meal.id));
  const isFavorite = selectedMeal && favorites.includes(selectedMeal.id);
  const isPlanned = selectedMeal && plannedMealId === selectedMeal.id;
  const plannedMeal = MEALS.find((meal) => meal.id === plannedMealId);

  function updateFilter(name, value) {
    setFilters((current) => ({ ...current, [name]: value }));
  }

  function rollMeal(event) {
    event?.preventDefault();
    setRolling(true);
    window.setTimeout(() => {
      const nextMeal = pickWeightedMeal(candidates, recent);
      setSelectedMeal(nextMeal);
      setRolling(false);
      if (!nextMeal) {
        setMessage("The dice found nothing. Loosen one filter and roll again.");
        return;
      }
      setRecent((current) => [nextMeal.id, ...current.filter((id) => id !== nextMeal.id)].slice(0, 5));
      setMessage(`Tonight's pick: ${nextMeal.name}.`);
    }, 350);
  }

  function toggleFavorite(mealId) {
    setFavorites((current) => (current.includes(mealId) ? current.filter((id) => id !== mealId) : [...current, mealId]));
  }

  function rejectMeal(mealId) {
    setRejected((current) => [mealId, ...current.filter((id) => id !== mealId)].slice(0, 6));
    setMessage("Marked as not tonight. The dice will dodge it for a while.");
  }

  function resetFilters() {
    setFilters(DEFAULT_FILTERS);
    setRejected([]);
    setMessage("Filters cleared. Full crave chaos restored.");
  }

  function addToPlan(mealId) {
    setPlannedMealId(mealId);
    setMessage("Added to tonight’s roll. Dinner has a plan now.");
  }

  return (
    <main className="app-shell">
      <section className="hero" aria-labelledby="app-title">
        <div className="hero-copy">
          <p className="eyebrow">Roll the crave. Skip the spiral.</p>
          <div className="brand-lockup"><img src="/craveroll-logo.svg" alt="" /><h1 id="app-title">{APP_NAME}</h1></div>
          <p>A fast, animated dinner randomizer for when nobody knows what they want. Tune the vibe, roll a pick, save winners, and turn hunger into a plan.</p>
        </div>
        <div className="dice-card" aria-hidden="true">
          <span className={rolling ? "dice rolling" : "dice"}>🎲</span><span className="roll-orbit">🍜</span><span className="roll-orbit second">🌮</span>
          <strong>{candidates.length}</strong>
          <small>matching ideas</small>
        </div>
      </section>

      <section className="control-panel" aria-label="Dinner filters">
        <div>
          <h2>What crave mode are we in?</h2>
          <div className="mode-grid" role="group" aria-label="Dinner mode">
            {modeOptions.map((option) => (
              <button key={option.value} className={filters.mode === option.value ? "mode-card active" : "mode-card"} type="button" onClick={() => updateFilter("mode", option.value)} aria-pressed={filters.mode === option.value}>
                <span>{option.icon}</span>{option.label}
              </button>
            ))}
          </div>
        </div>

        <form className="filters" onSubmit={rollMeal}>
          <label>Max time<select value={filters.maxTime} onChange={(event) => updateFilter("maxTime", event.target.value)}><option value="any">Any time</option><option value="15">15 minutes</option><option value="30">30 minutes</option><option value="45">45 minutes</option></select></label>
          <label>Effort<select value={filters.effort} onChange={(event) => updateFilter("effort", event.target.value)}><option value="any">Any effort</option><option value="low">Low</option><option value="medium">Medium</option></select></label>
          <label>Budget<select value={filters.budget} onChange={(event) => updateFilter("budget", event.target.value)}><option value="any">Any budget</option><option value="cheap">Cheap</option><option value="medium">Medium</option></select></label>
          <label>Ingredient on hand<input value={filters.ingredient} onChange={(event) => updateFilter("ingredient", event.target.value)} placeholder="rice, eggs, tofu..." /></label>
          <div className="filter-actions"><button className="primary-button" type="submit" disabled={rolling}>{rolling ? "Rolling..." : "Roll the crave"}</button><button className="ghost-button" type="button" onClick={resetFilters}>Reset</button></div>
        </form>
      </section>

      <p className="status" role="status">{message}</p>

      <section className="result-layout">
        <article className="result-card" aria-labelledby="result-title">
          {selectedMeal ? (
            <>
              <div className="result-topline"><span className="meal-emoji" aria-hidden="true">{selectedMeal.emoji}</span><div><p className="eyebrow">Tonight’s crave roll</p><h2 id="result-title">{selectedMeal.name}</h2></div></div>
              <p className="why">{selectedMeal.why}</p>
              <dl className="stats-grid"><div><dt>Time</dt><dd>{selectedMeal.time} min</dd></div><div><dt>Effort</dt><dd>{selectedMeal.effort}</dd></div><div><dt>Budget</dt><dd>{selectedMeal.budget}</dd></div><div><dt>Cuisine</dt><dd>{selectedMeal.cuisine}</dd></div></dl>
              <div className="tag-list" aria-label="Meal tags">{[selectedMeal.mode, selectedMeal.vibe, ...selectedMeal.diet].map((tag) => <span key={tag}>{tag}</span>)}</div>
              <div className="meal-details"><div><h3>Grab this</h3><ul>{selectedMeal.ingredients.map((item) => <li key={item}>{item}</li>)}</ul></div><div><h3>Quick plan</h3><ol>{selectedMeal.steps.map((step) => <li key={step}>{step}</li>)}</ol></div></div>
              <div className="result-actions"><button className="primary-button" type="button" onClick={rollMeal}>Reroll</button><button className="secondary-button" type="button" onClick={() => addToPlan(selectedMeal.id)}>{isPlanned ? "In plan ✓" : "Add to plan"}</button><button className="secondary-button" type="button" onClick={() => toggleFavorite(selectedMeal.id)}>{isFavorite ? "Saved ✓" : "Save favorite"}</button><button className="ghost-button" type="button" onClick={() => rejectMeal(selectedMeal.id)}>Not tonight</button></div>
            </>
          ) : (
            <div className="empty-state"><span aria-hidden="true">🫙</span><h2 id="result-title">No dinner found</h2><p>Try removing the ingredient filter or switching back to Surprise me.</p><button className="primary-button" type="button" onClick={resetFilters}>Clear filters</button></div>
          )}
        </article>

        <aside className="side-panel" aria-labelledby="favorites-title">
          <h2 id="favorites-title">Favorites</h2>
          {favoriteMeals.length ? <ul className="favorites-list">{favoriteMeals.map((meal) => <li key={meal.id}><button type="button" onClick={() => setSelectedMeal(meal)}><span aria-hidden="true">{meal.emoji}</span><span>{meal.name}</span></button></li>)}</ul> : <p className="muted">Save a winner and it will live here for future hungry-you.</p>}
          <h2>Tonight board</h2>
          <div className="board-card"><strong>{plannedMeal ? plannedMeal.name : "Open slot"}</strong><span>{plannedMeal ? "Locked for tonight" : "Roll, then add one to plan"}</span></div>

          <h2>Grocery list</h2>
          {plannedMeal ? (
            <ul className="grocery-list">{plannedMeal.ingredients.map((item) => <li key={item}>{item}</li>)}</ul>
          ) : (
            <p className="muted">Add a meal to the plan and the ingredient list appears here.</p>
          )}
        </aside>
      </section>
    </main>
  );
}

export default App;

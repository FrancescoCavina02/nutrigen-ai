-- Users table
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Diet plans table
CREATE TABLE diet_plans (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE, 
    plan_name VARCHAR(255) NOT NULL,
    goal VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Meals table
CREATE TABLE meals (
    id SERIAL PRIMARY KEY,
    diet_plan_id INTEGER REFERENCES diet_plans(id) ON DELETE CASCADE,
    day_of_week VARCHAR(20) CHECK (day_of_week IN ('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday')) NOT NULL,
    meal_type VARCHAR(20) CHECK (meal_type IN ('Breakfast', 'Lunch', 'Dinner', 'Snack')) NOT NULL,
    recipe_name VARCHAR(255) NOT NULL,
    recipe_details JSONB,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Indexes for performance
CREATE INDEX idx_diet_plans_user_id ON diet_plans(user_id);
CREATE INDEX idx_meals_diet_plan_id ON meals(diet_plan_id);
    
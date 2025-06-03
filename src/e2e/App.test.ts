import { test, expect } from '@playwright/test';

test.describe('todos app E2E', () => {
  test('Добавление и переключение задач', async ({ page }) => {
    await page.goto('/');
  
    const input = page.locator('[data-testid="todo-input"]');
    await input.fill('Новая задача');
    await input.press('Enter');
  
    const todoItems = page.locator('[data-testid="todo-item"]');
    await expect(todoItems).toHaveCount(1);
    await expect(todoItems).toContainText('Новая задача');
  
    const checkbox = page.locator('[data-testid="todo-checkbox"]');
    await checkbox.check();
  
    const updatedTodoItem = todoItems.first(); 
    const decoration = await updatedTodoItem.evaluate(el => window.getComputedStyle(el).getPropertyValue('text-decoration'));
    
    expect(decoration).toContain('line-through');
    
    const color = await updatedTodoItem.evaluate(el => window.getComputedStyle(el).getPropertyValue('color'));
    expect(color).toBe('rgb(217, 217, 217)');
  });

  test('Очистка завершенных задач', async ({ page }) => {
    await page.goto('/'); 
  
    const input = page.locator('[data-testid="todo-input"]');
    await input.fill('Сделанная задача');
    await input.press('Enter');
  
    const todoItems = page.locator('[data-testid="todo-item"]');
    await expect(todoItems).toHaveCount(1);
    await expect(todoItems).toContainText('Сделанная задача');
  
    const checkbox = todoItems.locator('[data-testid="todo-checkbox"]');
    await checkbox.check();
  
    const todoItem = todoItems.first();
    const decoration = await todoItem.evaluate(el => window.getComputedStyle(el).getPropertyValue('text-decoration'));
    expect(decoration).toContain('line-through');
  
    const clearCompleted = page.locator('[data-testid="clear-completed"]');
    await clearCompleted.click();
  
    await expect(todoItems).toHaveCount(0);
  });
});
import { test, expect } from '@playwright/test';

test.describe('todos app E2E', () => {
  test('Добавление и переключение задач', async ({ page }) => {
    await page.goto('/');
  
    // Добавляем задачу
    const input = page.locator('[data-testId="todo-input"]');
    await input.fill('Новая задача');
    await input.press('Enter');
  
    // Проверяем, что задача добавлена
    const todoItems = page.locator('[data-testId="todo-item"]');
    await expect(todoItems).toHaveCount(1);
    await expect(todoItems).toContainText('Новая задача');
  
    // Переключаем состояние задачи
    const checkbox = page.locator('[data-testId="todo-checkbox"]');
    await checkbox.check();
  
    // Проверяем, что задача помечена как завершённая
    const updatedTodoItem = todoItems.first(); // Берем первый элемент, если задач несколько
    const decoration = await updatedTodoItem.evaluate(el => window.getComputedStyle(el).getPropertyValue('text-decoration'));
    
    // Проверяем, что присутствует line-through в свойстве text-decoration
    expect(decoration).toContain('line-through');
    
    // Проверяем цвет задачи
    const color = await updatedTodoItem.evaluate(el => window.getComputedStyle(el).getPropertyValue('color'));
    expect(color).toBe('rgb(217, 217, 217)');
  });

  test('Очистка завершенных задач', async ({ page }) => {
    await page.goto('/'); 
  
    // Добавляем задачу
    const input = page.locator('[data-testId="todo-input"]');
    await input.fill('Сделанная задача');
    await input.press('Enter');
  
    // Проверяем, что задача добавлена
    const todoItems = page.locator('[data-testId="todo-item"]');
    await expect(todoItems).toHaveCount(1);
    await expect(todoItems).toContainText('Сделанная задача');
  
    // Завершаем задачу
    const checkbox = todoItems.locator('[data-testId="todo-checkbox"]');
    await checkbox.check();
  
    // Проверяем, что задача теперь завершена
    const todoItem = todoItems.first(); // Берем первый элемент, если задач несколько
    const decoration = await todoItem.evaluate(el => window.getComputedStyle(el).getPropertyValue('text-decoration'));
    expect(decoration).toContain('line-through'); // Проверяем, что присутствует line-through
  
    // Очищаем завершенные задачи
    const clearCompleted = page.locator('[data-testId="clear-completed"]');
    await clearCompleted.click();
  
    // Проверяем, что список задач пуст
    await expect(todoItems).toHaveCount(0);
  });
});
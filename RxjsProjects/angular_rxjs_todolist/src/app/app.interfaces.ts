// Task Tipi Oluşturma
export interface Task {
    id: number;
    description: string;
    isDone: boolean;
}

// Görev Dizi Tipi oluşturma
export interface Tasks extends Array<Task> { }

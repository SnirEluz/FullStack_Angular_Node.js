import { Injectable } from '@angular/core';
import Customer from '../models/customer.mode';
import Todo from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  todosArr: Todo[] = []
  customersArr: Customer[] = []

  async getTodos() {
    const res = await fetch('http://localhost:1000/todos')
    const data: Todo[] = await res.json()
    this.todosArr = data
    console.log(data)
  }
  async getCustomer() {
    const res = await fetch('http://localhost:1000/customers')
    const data: Customer[] = await res.json()
    this.customersArr = data
    console.log(data)
  }
  async newTodo(body: { todobody: string, customer: number }) {
    try {
      const res = await fetch('http://localhost:1000/addtodo', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(body)
      })
      const data = await res.json()
      if (data.msg) {
        this.getTodos()
      }
    } catch (error) {
      console.log(error)
    }
  }
  async isTodoComplete(body: { boolean: boolean, todoId: number}) {
    try {
      const res = await fetch(`http://localhost:1000/istodocomplet`, {
        method: 'put',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(body)
      })
      const data = await res.json()
      if (data.msg) {
        this.getTodos()
      }
    } catch (error) {
      console.log(error)
    }
  }

  async delTodo(todoId: { todoId:number}) {
    try {
      const res = await fetch(`http://localhost:1000/delTodo/${todoId}`,{method:"delete"})
      const data = await res.json()
      console.log(data)
      if (data.msg){
        this.getTodos()
      }
    } catch (error) {
      console.log(error)
    }
  }

}

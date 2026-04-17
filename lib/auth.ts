'use client'

export interface User {
  id: string
  email: string
  name: string
  createdAt: string
}

const STORAGE_KEY = 'apex_user'
const USERS_KEY = 'apex_users'

export function saveUser(user: User): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(user))
    // Also save to users list for login purposes
    const users = getAllUsers()
    const exists = users.find((u) => u.email === user.email)
    if (!exists) {
      users.push(user)
      localStorage.setItem(USERS_KEY, JSON.stringify(users))
    }
  }
}

export function getCurrentUser(): User | null {
  if (typeof window !== 'undefined') {
    const user = localStorage.getItem(STORAGE_KEY)
    return user ? JSON.parse(user) : null
  }
  return null
}

export function logout(): void {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(STORAGE_KEY)
  }
}

export function getAllUsers(): User[] {
  if (typeof window !== 'undefined') {
    const users = localStorage.getItem(USERS_KEY)
    return users ? JSON.parse(users) : []
  }
  return []
}

export function loginUser(email: string, password: string): User | null {
  // Note: This is a demo implementation. Never store passwords in localStorage in production.
  // This is just for demonstration purposes.
  if (typeof window !== 'undefined') {
    const users = getAllUsers()
    const user = users.find((u) => u.email === email)
    if (user) {
      const stored = localStorage.getItem(`password_${email}`)
      if (stored === password) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(user))
        return user
      }
    }
  }
  return null
}

export function signupUser(email: string, name: string, password: string): User | null {
  // Note: This is a demo implementation. Never store passwords in localStorage in production.
  if (typeof window !== 'undefined') {
    const users = getAllUsers()
    if (users.find((u) => u.email === email)) {
      return null // User already exists
    }

    const newUser: User = {
      id: Math.random().toString(36).substr(2, 9),
      email,
      name,
      createdAt: new Date().toISOString(),
    }

    users.push(newUser)
    localStorage.setItem(USERS_KEY, JSON.stringify(users))
    // Store password hash (in production, this should be done on server)
    localStorage.setItem(`password_${email}`, password)
    saveUser(newUser)
    return newUser
  }
  return null
}

import { createContext, useContext, useState, useMemo } from 'react';

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
	const [user, setUser] = useState(null);

	const login = (username, _password) => {
		// Simulación simple: si el usuario es 'admin' iniciamos sesión
		if (username === 'admin') {
			setUser({ name: username });
			return true;
		}
		return false;
	};

	const logout = () => setUser(null);

	const value = useMemo(() => ({ user, login, logout }), [user]);

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
	const ctx = useContext(AuthContext);
	if (!ctx) throw new Error('useAuth must be used within AuthProvider');
	return ctx;
}


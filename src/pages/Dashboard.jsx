import { useEffect, useState } from 'react';
import { useAuth } from '../store/AuthContext';
import { getUsers } from '../services/api';

export default function Dashboard() {
	const { user, logout } = useAuth();
	const [users, setUsers] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		let active = true;
		(async () => {
			try {
				const data = await getUsers();
				if (active) setUsers(data);
			} catch (e) {
				setError('No se pudieron cargar los datos');
			} finally {
				setLoading(false);
			}
		})();
		return () => { active = false; };
	}, []);

	const first = users[0];
	const second = users[1];

	return (
		<div className="container">
			<section className="hero">
				<h1>Dashboard</h1>
				{user ? (
					<p className="muted">Hola, {user.name}. Aquí tienes un resumen.</p>
				) : (
					<p className="muted">No hay usuario.</p>
				)}
				<div className="actions">
					<button onClick={logout}>Cerrar sesión</button>
				</div>
			</section>

			<div className="grid">
				<div className="card">
					<h3>Total de usuarios</h3>
					<p style={{ fontSize: '1.8rem' }}>{loading ? '...' : users.length}</p>
				</div>
				<div className="card">
					<h3>Primer usuario</h3>
					{error ? (
						<span className="badge" style={{ borderColor: 'tomato' }}>{error}</span>
					) : loading ? (
						<p>Cargando...</p>
					) : (
						<p>{first ? `${first.name} — ${first.email}` : 'Sin datos'}</p>
					)}
				</div>
				<div className="card">
					<h3>Segundo usuario</h3>
					{error ? (
						<span className="badge" style={{ borderColor: 'tomato' }}>{error}</span>
					) : loading ? (
						<p>Cargando...</p>
					) : (
						<p>{second ? `${second.name} — ${second.email}` : 'Sin datos'}</p>
					)}
				</div>
			</div>
		</div>
	);
}


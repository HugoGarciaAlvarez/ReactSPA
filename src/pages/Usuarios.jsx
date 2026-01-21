import { useEffect, useState } from 'react';
import { getUsers } from '../services/api';

export default function Usuarios() {
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
				setError('Error cargando usuarios');
			} finally {
				setLoading(false);
			}
		})();
		return () => { active = false; };
	}, []);

	if (loading) return <p>Cargando usuarios...</p>;
	if (error) return <span className="badge" style={{ borderColor: 'tomato' }}>{error}</span>;

	return (
		<div className="container">
			<section className="hero">
				<h1>Usuarios</h1>
				<p className="muted">Datos obtenidos de JSONPlaceholder.</p>
			</section>
			<div className="card">
				<div className="table-wrapper">
					<table className="table">
						<thead>
							<tr>
								<th>Nombre</th>
								<th>Email</th>
								<th>Ciudad</th>
							</tr>
						</thead>
						<tbody>
							{users.map(u => (
								<tr key={u.id}>
									<td>{u.name}</td>
									<td>{u.email}</td>
									<td>{u.address?.city}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}


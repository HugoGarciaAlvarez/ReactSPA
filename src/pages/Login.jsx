import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../store/AuthContext';

export default function Login() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState(null);
	const { login } = useAuth();
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		const ok = login(username, password);
		if (ok) {
			navigate('/dashboard');
		} else {
			setError('Credenciales inválidas. Usa usuario "admin".');
		}
	};

	return (
		<div className="container">
			<section className="hero">
				<h1>Acceso</h1>
				<p className="muted">Inicia sesión para entrar al Dashboard.</p>
			</section>
			<form className="form" onSubmit={handleSubmit}>
				<div className="field">
					<label>Usuario</label>
					<input
						className="input"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						placeholder="admin"
					/>
				</div>
				<div className="field">
					<label>Contraseña</label>
					<input
						className="password"
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<div className="actions">
					<button type="submit">Entrar</button>
				</div>
				{error && <span className="badge" style={{ borderColor: 'tomato' }}>{error}</span>}
			</form>
		</div>
	);
}


export default function Home() {
	return (
		<div className="container">
			<section className="hero">
				<h1>Tu SPA en React</h1>
				<p className="muted">Routing, Auth, Lazy y API en dos sesiones.</p>
			</section>
			<div className="grid">
				<div className="card">
					<h3>Routing</h3>
					<p>Navegación sin recargas con React Router.</p>
				</div>
				<div className="card">
					<h3>Autenticación</h3>
					<p>Login simulado y rutas privadas.</p>
				</div>
				<div className="card">
					<h3>Lazy Loading</h3>
					<p>Carga diferida del Dashboard.</p>
				</div>
				<div className="card">
					<h3>API REST</h3>
					<p>Usuarios desde JSONPlaceholder.</p>
				</div>
			</div>
		</div>
	);
}


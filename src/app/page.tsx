"use client";
import { useRef } from "react";
import { Fireworks } from "@fireworks-js/react";

export default function Home() {
	const styles = {
		backgroundImage: "url(/bg-gradient.jpg)",
		backgroundSize: "cover",
		backgroundPosition: "center",
	};

	const refFireworks = useRef(null);

	return (
		<main className="flex items-center justify-center w-full h-full min-h-screen overflow-hidden" style={styles}>
			{/* Fireworks Component */}
			<Fireworks
				className="absolute inset-0"
				about="Talento Tech Bogotá"
				ref={refFireworks}
				options={{
					autoresize: true,
					opacity: 0.5,
					acceleration: 1.05,
					friction: 0.97,
					gravity: 1.5,
					particles: 50,
					traceLength: 3,
					traceSpeed: 10,
					explosion: 5,
					intensity: 30,
					flickering: 50,
					lineStyle: "round",
					hue: {
						min: 0,
						max: 360,
					},
					delay: {
						min: 30,
						max: 60,
					},
					rocketsPoint: {
						min: 50,
						max: 50,
					},
					lineWidth: {
						explosion: {
							min: 1,
							max: 3,
						},
						trace: {
							min: 1,
							max: 2,
						},
					},
					brightness: {
						min: 50,
						max: 80,
					},
					decay: {
						min: 0.015,
						max: 0.03,
					},
					mouse: {
						click: false,
						move: false,
						max: 1,
					},
				}}
			/>

			{/* Main Content */}
			<section className="max-w-lg text-center w-full sm:w-auto mx-4">
				<img src="https://talentotechbogota.co/images/TalentoTech.png" alt="Talento Tech Logo" className="mx-auto mb-4" />
				<h1 className="text-2xl font-bold text-white mb-4">¡Felices Fiestas y un Próspero Año Nuevo!</h1>
				<p className="text-white leading-relaxed mb-6">
					Queridos campistas,
					<br />
					En este cierre de año, queremos agradecerles por haber sido parte de Talento Tech Bogotá. Su dedicación, creatividad y esfuerzo han dejado una huella imborrable en nuestra historia.
				</p>
				<div className="border-t border-gray-300 pt-4">
					<p className="text-white italic">&quot;A veces los caminos se separan, pero los recuerdos y aprendizajes nos acompañan para siempre.&quot;</p>
					<p className="mt-4 text-white">Les deseamos unas fiestas llenas de amor y éxito en sus próximos retos. Aunque no sabemos lo que el futuro nos deparará, siempre llevaremos con nosotros los momentos compartidos.</p>
				</div>
				<footer className="mt-6">
					<p className="text-sm text-white">
						Con todo nuestro cariño,
						<br />
						El equipo de Talento Tech Bogotá
					</p>
				</footer>
				<br />
				<img src="https://talentotechbogota.co/images/Logo_UT%20BLANCO.png" alt="Unión Temporal Tecnalia Cymetria" className="mx-auto mt-4 w-52" />
			</section>
		</main>
	);
}

import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, MessageSquare, Building2, User, Sparkles } from 'lucide-react';
import { MAIN_SPEAKER } from '../data/congresoData';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    institution: '',
    email: '',
    interest: 'Intercambio Académico / Proyecto Similar',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError('Por favor completá los campos obligatorios (nombre, correo y mensaje).');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  return (
    <section id="contacto" className="py-20 md:py-32 bg-slate-950 border-t border-purple-900/20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Speaker and Academic Networking details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="text-xs font-bold uppercase tracking-widest text-purple-400">
              Intercambio & Transferencia
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
              Conectá con el Expositor
            </h2>
            <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
              ¿Pertenecés a una universidad pública, municipio, organismo de seguridad o administración estatal?
              Escribinos para intercambiar experiencias, acceder a la documentación técnica o coordinar una reunión
              durante el Congreso.
            </p>

            {/* Direct contact card */}
            <div className="p-6 rounded-3xl bg-slate-900 border border-purple-900/40 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-purple-600/20 text-purple-300 border border-purple-500/30 flex items-center justify-center font-bold font-heading">
                  GN
                </div>
                <div>
                  <h4 className="text-base font-bold text-white font-heading">{MAIN_SPEAKER.name}</h4>
                  <p className="text-xs text-slate-400">{MAIN_SPEAKER.title}</p>
                  <p className="text-xs text-purple-400 font-medium">{MAIN_SPEAKER.institution}</p>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800 text-xs space-y-2">
                <a
                  href={`mailto:${MAIN_SPEAKER.email}`}
                  className="flex items-center gap-2 text-purple-300 hover:text-purple-200 transition-colors"
                >
                  <Mail className="w-4 h-4 text-purple-400" />
                  <span>{MAIN_SPEAKER.email}</span>
                </a>
                <div className="text-slate-400">
                  Sede: Beruti y Riobamba, Rosario (Facultad de Ciencia Política y RRII)
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 border border-purple-800/40 shadow-2xl relative">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white font-heading">¡Mensaje Enviado con Éxito!</h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto font-light leading-relaxed">
                    Gracias por tu interés en el proyecto de Transformación Digital del SRP. Gustavo Núñez y el equipo se
                    pondrán en contacto a la brevedad.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        institution: '',
                        email: '',
                        interest: 'Intercambio Académico / Proyecto Similar',
                        message: ''
                      });
                    }}
                    className="mt-4 px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold transition-colors"
                  >
                    Enviar otra consulta
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-white font-heading">
                      Consulta Institucional o Académica
                    </h3>
                    <p className="text-xs text-slate-400">
                      Completá el formulario para coordinar un encuentro o solicitar material ampliado.
                    </p>
                  </div>

                  {error && (
                    <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs">
                      {error}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-slate-300">Nombre completo *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ej. Dra. Valeria Rossi"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-purple-500 transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-slate-300">Institución / Organismo</label>
                      <input
                        type="text"
                        value={formData.institution}
                        onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                        placeholder="Ej. Universidad / Municipio"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-purple-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-slate-300">Correo Electrónico *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="tu.correo@institucion.edu.ar"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-purple-500 transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-slate-300">Motivo de Contacto</label>
                      <select
                        value={formData.interest}
                        onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-purple-500 transition-colors"
                      >
                        <option value="Intercambio Académico">Intercambio Académico</option>
                        <option value="Replicar modelo en mi institución">Replicar modelo en mi institución</option>
                        <option value="Reunión durante el Congreso (4/11)">Reunión durante el Congreso (4/11)</option>
                        <option value="Solicitar detalles técnicos de software">Detalles técnicos del software</option>
                        <option value="Otro">Otro motivo</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-300">Mensaje o Consulta *</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Contanos tu consulta o si querés coordinar durante el simposio..."
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-6 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-purple-950 transition-all active:scale-[0.98]"
                  >
                    <Send className="w-4 h-4" />
                    <span>Enviar Mensaje</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

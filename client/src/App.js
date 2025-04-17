import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white p-6">
      <header className="text-center py-12">
        <motion.h1
          className="text-4xl md:text-6xl font-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Il Tuo Personal Trainer
        </motion.h1>
        <motion.p
          className="mt-4 text-lg md:text-xl text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Trasforma il tuo corpo. Potenzia la tua mente.
        </motion.p>
        <motion.div
          className="mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Button className="text-lg px-6 py-3 rounded-2xl bg-emerald-500 hover:bg-emerald-600">
            Inizia Ora
          </Button>
        </motion.div>
      </header>

      <section className="grid md:grid-cols-3 gap-6 mt-12">
        {[
          {
            title: "Programmi su misura",
            text: "Allenamenti personalizzati per ogni livello."
          },
          {
            title: "Nutrizione & Benessere",
            text: "Consigli alimentari per risultati duraturi."
          },
          {
            title: "Supporto Continuo",
            text: "Ti accompagno passo dopo passo nel tuo percorso."
          }
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <Card className="bg-white text-gray-900 rounded-2xl shadow-xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p>{item.text}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </section>

      <footer className="mt-20 text-center text-gray-400">
        <p>© 2025 Il Tuo Personal Trainer. Tutti i diritti riservati.</p>
      </footer>
    </div>
  );
}

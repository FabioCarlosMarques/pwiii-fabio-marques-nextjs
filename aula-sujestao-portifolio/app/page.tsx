 import Head from 'next/head';
 import Navbar from './components/Navbar';

 export default function Home() {
    return (
      <>
        <Head>
          <title>Meu Portifólio</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Navbar />
        <main className="p-6 max-w-10x1 mx-auto">
          <section id="sobre" className="mb-10">
            <h1 className="text-3x1 font-bold text-blue-700">Olá! Eu sou Fábio Marques</h1>
            <p className="mt-2 text-gray-700">Desenvolvedor em formação. Amo criar coisas com código</p>
          </section>

          <section id="projetos" className="mb-10 bg-gray-100 p-6 rounded shadow">
            <h2 className="text-2x1 font-semibold mb-4 text-gray-800">Meus Projetos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-4 shadow rounded hover:scale-105 transition-transform duration-200">
                <h3 className="font-bold text-lg">Projeto 1</h3>
              <p className="text-gray-600">Descrição breve do projeto 2.</p>
            </div>
          </div>
        </section>

        <section id="tcc" className="mb-10 bg-gray-100 p-6 rounded shadow">
  <h2 className="text-2xl font-semibold mb-4 text-gray-800">Projeto de TCC</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div>
      <img
        src="/tcc1.png"
        alt="Tela do TCC"
        className="w-full h-auto rounded shadow"
      />
    </div>
    <div>
      <h3 className="text-xl font-bold text-blue-700">Monitoria Digital Educacional</h3>
      <p className="mt-2 text-gray-700">
        Plataforma desenvolvida no TCC com foco em oferecer suporte a alunos com dificuldades escolares,
        conectando estudantes a mentores voluntários.
      </p>
      <a
        href="https://monitoria-digital1-0.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Ver no GitHub
      </a>
    </div>
  </div>
</section>


        <section id="contato" className="mb-10">
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">Contato</h2>
          <p className="text-gray-700">📧 Email: fcarlosmarques96@gmail.com</p>
        </section>
      </main>
    </>
  );
}
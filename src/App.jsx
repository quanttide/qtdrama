import './App.css'

const works = [
  {
    name: '都市言情',
    code: 'urban-romance',
    desc: '职场言情改编——短剧作品与教学素材',
    repo: 'https://github.com/quanttide/quanttide-profile-of-creative-work',
  },
  {
    name: '重生言情',
    code: 'rebirth-romance',
    desc: '重生言情改编——短剧作品与教学素材',
    repo: 'https://github.com/quanttide/quanttide-profile-of-creative-work',
  },
]

const teachings = [
  {
    name: 'AI 短剧制作',
    code: 'teaching',
    desc: '教学资源上架中：剧本、分镜、生成与成片的完整案例',
    repo: 'https://github.com/quanttide/quanttide-drama',
  },
]

function CardList({ title, items }) {
  return (
    <section className="games">
      <h2>{title}</h2>
      {items.map((g) => (
        <article key={g.code} className="card">
          <h3>{g.name}</h3>
          <p>{g.desc}</p>
          <a href={g.repo} target="_blank" rel="noreferrer">{g.code}</a>
        </article>
      ))}
    </section>
  )
}

function App() {
  return (
    <main className="home">
      <header>
        <h1>量潮影视</h1>
        <p>影视业务入口：作品与教学资源在下面，领域工程与内容在 quanttide-drama。</p>
      </header>
      <CardList title="作品" items={works} />
      <CardList title="教学资源" items={teachings} />
      <footer>
        <a href="https://github.com/quanttide/quanttide-drama">领域仓库 quanttide-drama</a>
      </footer>
    </main>
  )
}

export default App

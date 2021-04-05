import { faGithub, faRust } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { h, Component } from 'preact'
import './App.css'

export default class App extends Component {
  state = {
    name: 'viper_site'
  }

  render () {
    const { name } = this.state
    return (
      <div className='App'>
        <section className="hero is-link">
        <section className="hero container" style="width: 100%">
          <div className="hero-head">
            <div id="navbarMenuHeroC" className="navbar-menu">
              <div className="navbar-end">
                <a className="navbar-item is-active">
                  Home
                </a>
                {/* TODO: Add Examples Page/Link
                <a className="navbar-item">
                  Examples
                </a>
                */}
                <a href="https://github.com/mgsium/viper-rs/wiki" className="navbar-item">
                  Documentation
                </a>
                <span className="navbar-item">
                  <a href="https://github.com/mgsium/viper-rs/releases" className="button is-inverted">
                    <span className="icon">
                      <FontAwesomeIcon icon={faGithub}/>
                    </span>
                    <span>Download</span>
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className="hero-body">
            <p className="title">
              viper.rs
            </p>
            <p className="subtitle">
              The lightweight rust vcs
            </p>
            <div className="field is-grouped is-grouped-multiline">
              <div className="control">
                <div className="tags has-addons">
                  <span className="tag is-dark is-medium">Language</span>
                  <span className="tag is-link is-medium is-warning">Rust</span>
                </div>
              </div>

              <div className="control">
                <div className="tags has-addons">
                  <span className="tag is-dark is-medium">Version Control</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        </section>
        <section className="body container">
          <br/>
          <div className="columns">
            <div className="column">
              <div className="notification">
                <div className="block">
                  <strong>viper.rs</strong> is still in development. Contributions are welcome on <a href="https://github.com/mgsium/viper-rs">GitHub</a>
                </div>
                <div className="block">
                  <progress className="progress is-link" value="30" max="100">30%</progress>
                </div>
              </div>
            </div>
          </div>
          <br/>
          <div className="columns content">
            <div className="column">
              <h1 className="block">Philosophy</h1>
              <p className="block">Viper was created as a way to manage projects in an intuitive, lightweight way, external to the git ecosystem.</p>
              <h1 className="block">Docs</h1>
              <p className="block">(Work in Progress)</p>
              <a href="https://github.com/mgsium/viper-rs/wiki" className="button">
                <FontAwesomeIcon icon={faGithub} />
                &nbsp;
                See Docs on GitHub
              </a>
              <h1 className="block">Roadmap</h1>
              <p className="block">A detailed roadmap can be found <a href="https://trello.com/b/CpC0OS5G/viper">here.</a></p>
              {
                [
                  { task: "Templating", isComplete: true },
                  { task: "Remote Repositories", isComplete: false }
                ].map(t => (
                  <span>
                    <label className="checkbox" disabled>
                      <input type="checkbox" disabled checked={t.isComplete}/>
                      &nbsp;
                      {t.task}
                    </label>
                    <br/>
                  </span>
                ))
              }
            </div>
            <div className="column content">
              <h1 className="block">Downloads</h1>
              <p className="block">Download the latest version of viper from crates.io</p>
              <a href="https://crates.io/crates/viper" className="button is-warning block">
                <FontAwesomeIcon icon={faRust} />
                &nbsp;
                Download from crates.io
              </a>
              <p className="block">Releases are also available on GitHub.</p>
              <a href="https://github.com/mgsium/viper-rs/releases" className="button">
                <FontAwesomeIcon icon={faGithub} />
                &nbsp;
                GitHub Releases
              </a>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

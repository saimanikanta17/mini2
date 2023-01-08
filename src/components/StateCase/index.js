import './index.css'

const StateCase = props => {
  const {stateStats} = props
  const {confirmed, deceased, recovered} = stateStats
  const activeCases = confirmed - (recovered + deceased)

  return (
    <div className="stats-container">
      <div className={`confirmed-card ${'stat-card'}`}>
        <p>Confirmed</p>
        <img
          src="https://res.cloudinary.com/djy2od68c/image/upload/v1672747947/check-mark_1_zgzdjy.png"
          alt="country wide confirmed cases pic"
          className="pic-size"
        />
        <p>{confirmed}</p>
      </div>
      <div className={`active-card ${'stat-card'}`}>
        <p>Active</p>
        <img
          src="https://res.cloudinary.com/djy2od68c/image/upload/v1672748000/protection_1_kwud79.png"
          alt="country wide active cases pic"
          className="pic-size"
        />
        <p>{activeCases}</p>
      </div>
      <div className={`recovered-card ${'stat-card'}`}>
        <p>Recovered</p>
        <img
          src="https://res.cloudinary.com/djy2od68c/image/upload/v1672748049/recovered_1_1_fhgv0r.png"
          alt="country wide recovered cases pic"
          className="pic-size"
        />
        <p>{recovered}</p>
      </div>
      <div className={`deceased-card ${'stat-card'}`}>
        <p>Deceased</p>
        <img
          src="https://res.cloudinary.com/djy2od68c/image/upload/v1672748066/breathing_1_ya1lcf.png"
          alt="country wide deceased cases pic"
          className="pic-size"
        />
        <p>{deceased}</p>
      </div>
    </div>
  )
}

export default StateCase

export default function InfoScreen({ page, onBack, onSwitch, switchLabel }) {
  return (
    <div className="info-screen">
      <article className="info-scroll">
        <button type="button" className="btn btn-stone" onClick={onBack}>Back</button>
        <p className="kicker">{page.kicker}</p>
        <h1>{page.title}</h1>
        <p className="lede">{page.lede}</p>
        {page.sections.map((section) => (
          <section key={section.heading}>
            <h2>{section.heading}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>
        ))}
        {page.timeline ? (
          <section>
            <h2>Timeline</h2>
            <ol className="timeline">
              {page.timeline.map(([when, what]) => (
                <li key={when}>
                  <strong>{when}</strong>
                  <span>{what}</span>
                </li>
              ))}
            </ol>
          </section>
        ) : null}
        {onSwitch ? (
          <button type="button" className="btn btn-wax" onClick={onSwitch}>{switchLabel}</button>
        ) : null}
      </article>
    </div>
  );
}

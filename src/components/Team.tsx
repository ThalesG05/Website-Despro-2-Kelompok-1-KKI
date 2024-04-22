import TeamCSS from './Team.module.css'

function Team() {
  return (
    <div className={`${TeamCSS.content} ${TeamCSS.container}`}>
        <p>
        Meet our dynamic team from the International Class of FTUI Electrical Engineering, specializing in cutting-edge technology for safety enhancement. Arel, Amadeo, Hakiim, and Anindya are the minds behind our project on "Safety Helmet Detection using Raspberry Pi with YOLOv8."
        </p>
        <p>
        With a passion for innovation and a drive for excellence, we're dedicated to creating solutions that ensure workplace safety through advanced technology integration.
        </p>
    </div>
  )
}

export default Team
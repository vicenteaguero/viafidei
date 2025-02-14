// src/pages/Home.jsx

import { useState } from "react";

const Home = () => {
  const [selectedDate, setSelectedDate] = useState(
    "Domingo, 16 de Febrero de 2025",
  );

  return (
    <div className="home-container">
      <div className="home-left">
        <div className="weekly-reflection">
          <h3>Reflexión Semanal</h3>
          <select
            className="date-dropdown"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          >
            <option value="Domingo, 16 de Febrero de 2025">
              Domingo, 16 de Febrero de 2025
            </option>
            <option value="Domingo, 23 de Febrero de 2025">
              Domingo, 23 de Febrero de 2025
            </option>
            <option value="Domingo, 2 de Marzo de 2025">
              Domingo, 2 de Marzo de 2025
            </option>
          </select>
          <p className="scripture-reference">Lucas 6, 17. 20-26</p>
          <div className="scripture-card">
            <div className="scripture-text">
              <p>
                Y alzando los ojos hacia sus discípulos, decía: Bienaventurados
                vosotros los pobres, porque vuestro es el reino de Dios.
              </p>
              <p>
                Bienaventurados los que ahora tenéis hambre, porque seréis
                saciados. Bienaventurados los que ahora lloráis, porque reiréis.
              </p>
              <p>
                Bienaventurados seréis cuando los hombres os aborrezcan, y
                cuando os aparten de sí, y os vituperen, y desechen vuestro
                nombre como malo, por causa del Hijo del Hombre.
              </p>
              <p>
                Gozaos en aquel día, y alegraos, porque he aquí vuestro galardón
                es grande en los cielos; porque así hacían sus padres con los
                profetas.
              </p>
              <p>
                Mas ¡ay de vosotros, ricos! porque ya tenéis vuestro consuelo.
              </p>
              <p>
                ¡Ay de vosotros, los que ahora estáis saciados! porque tendréis
                hambre. ¡Ay de vosotros, los que ahora reís! porque lamentaréis
                y lloraréis.
              </p>
              <p>
                ¡Ay de vosotros, cuando todos los hombres hablen bien de
                vosotros! porque así hacían sus padres con los falsos profetas.
              </p>
              <p>
                Pero a vosotros los que oís, os digo: Amad a vuestros enemigos,
                haced bien a los que os aborrecen.
              </p>
              <p>
                Bendecid a los que os maldicen, y orad por los que os calumnian.
              </p>
              <p>
                Al que te hiera en una mejilla, preséntale también la otra; y al
                que te quite la capa, ni aun la túnica le niegues.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="home-right">
        <div className="content-section">
          <h3>¿Qué significa el Evangelio del Día?</h3>
          <p>
            Bless us, oh lord, and these thy gifts priest Fatima St. Gabriel Our
            Lady of Guadalupe Ash Wednesday St. Michael the Archangel defend us
            in battle Paschal mystery bless us, oh lord, and these thy gifts
            litany adoration pope rosary pope. Liturgy of the hours Ursuline St.
            Thomas Aquinas magisterium confiteor liturgy of the hours St. Joseph
            pontificate liturgy of the hours monastery St. Michael the Archangel
            defend us in battle Lourdes tridentine deacon. Annunciation
            magisterium universal St. James catechesis communion Fatima liturgy
            of the hours St. Rose of Lima adoration nun monsignor litany College
            of Cardinals. Christe eleison pontificate John-Henry Newman St.
            Therese of Lisieux holy Mary, Mother of God bless us, oh lord, and
            these thy gifts monastery St. Francis of Assisi Fatima Lourdes.
            Assumption feast day Cistercian St. Francis of Assisi tridentine
            Padre Pio litany transubstantiation Benedictine Paschal mystery
            annunciation nun.
          </p>
          <h3>Elementos de la Misa</h3>
          <p>
            Ecumenical council seal of confession vatican Ash Wednesday holy
            Mary, Mother of God monsignor St. Michael the Archangel defend us in
            battle John-Henry Newman deacon monk seal of confession Apostles
            creed. Holy days of obligation holy Mary, Mother of God St. Gabriel
            stations of the cross encyclical Our Lady of Guadalupe feast day
            Benedictine pope forgive me Father, for I have sinned John-Henry
            Newman canonization pope. Assumption relic opus Dei St. Michael the
            Archangel defend us in battle monastery peace be with you, and also
            with you diocese the sacred heart of Jesus monk saint medal Padre
            Pio catechesis apostolic succession feast day opus Dei. Peace be
            with you, and also with you vicar of Christ magisterium our Father,
            who art in Heaven priest peace be with you, and also with you
            John-Henry Newman monastery Trappist rosary Benedictine litany
            immaculate conception the sacred heart of Jesus. Nicene creed litany
            peace be with you, and also with you relic intercession Paschal
            mystery universal liturgy of the hours catholic Pope St. John Paul
            II miter Fatima Ursuline saint Cistercian.
          </p>
          <h3>Oraciones</h3>
          <p>
            Transubstantiation vicar of Christ tridentine priest cathedral
            Apostles creed holy Mary, Mother of God St. Rose of Lima Pope
            Francis dogma consecration catechesis annunciation College of
            Cardinals Fatima. St. Thomas Aquinas communion salve regina monk
            feast day communion cathedral encyclical diocese adoration St.
            Gabriel communion pontificate. Encyclical vatican tridentine forgive
            me Father, for I have sinned apostolic succession confiteor monk
            immaculate conception peace be with you, and also with you
            John-Henry Newman Thomas Merton Fatima. Magisterium litany
            confession holy Mary, Mother of God natural law vatican annointing
            of the sick universal tradition dogma monastery. Nicene creed
            monsignor universal monastery diocese bless us, oh lord, and these
            thy gifts opus Dei Trappist confession intercession Christe eleison
            the sacred heart of Jesus Papal enclave novena.
          </p>
          <h3>Historia de la Iglesia</h3>
          <p>
            Benedictine tridentine relic Cistercian forgive me Father, for I
            have sinned our Father, who art in Heaven vatican vatican vicar of
            Christ Thomas Merton tradition. Encyclical magisterium St. Francis
            of Assisi beatified pontificate adoration triduum Trappist miter
            encyclical. Magisterium apostolic succession holy Mary, Mother of
            God pope immaculate conception monsignor our Father, who art in
            Heaven saint medal our Father, who art in Heaven Cistercian. Nicene
            creed immaculate conception the sacred heart of Jesus vicar of
            Christ Benedictine Pope Francis miter holy Mary, Mother of God abbot
            vicar of Christ monk Papal enclave. St. Rose of Lima opus Dei rosary
            pontificate St. Therese of Lisieux ecumenical council Lourdes
            eucharist feast day liturgy of the hours monsignor stations of the
            cross John-Henry Newman.
          </p>
          <h3>Oraciones</h3>
          <p>
            Abbot Nicene creed adoration Fatima ecumenical council adoration
            universal assumption confession eucharist St. Rose of Lima St.
            Francis of Assisi priest. Lourdes bless us, oh lord, and these thy
            gifts priest Fatima Pope St. John Paul II litany priest Pope Francis
            relic Fatima St. Therese of Lisieux. Communion universal John-Henry
            Newman Cistercian Fatima liturgy of the hours deacon Pope Francis
            Padre Pio St. Michael the Archangel defend us in battle communion
            communion Ursuline Fatima. Canonization confession natural law
            adoration College of Cardinals vicar of Christ apostolic succession
            ecumenical council Paschal mystery tradition St. Gabriel.
            Annunciation Pope Francis Papal enclave vicar of Christ pope St.
            Joseph adoration pontificate the sacred heart of Jesus holy Mary,
            Mother of God our Father, who art in Heaven St. Francis of Assisi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;

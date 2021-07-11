import React from 'react';
import { globalDatacontext } from '../context/globalDatacontext';
import { isIE } from 'react-device-detect';

export default function ConfigComponent() {
  window.dataLayer = window.dataLayer || [];
  const context = React.useContext(globalDatacontext);

  const lenguage = context.dataInfo.iebs_consent.language;

  console.log(context.state);

  const handleChange = event => {
    context.setState({
      ...context.state,
      [event.target.name]: event.target.checked === true ? 1 : 0,
    });
  };

  const handleAdmin = () => {
    if (context.state.fun && context.state.ana && context.state.mar === true) {
      window.dataLayer.push({
        event: 'iebs_consent_set',
        iebs_consent: { fun: 1, ana: 1, mar: 1 },
      });
      localStorage.setItem(
        'data_iebs',
        JSON.stringify({ fun: 1, ana: 1, mar: 1 })
      );
      context.setCookie('data_iebs', { fun: 1, ana: 1, mar: 1 });
    }

    context.setOpen(false);
    context.setBottomDrawer(false);
  };

  const handleClose = () => {
    context.setOpen(false);
  };

  return (
    <>
      {context.open && (
        <div
          className="modal-overlay"
          style={isIE ? { display: 'flex' } : { display: 'block' }}
        >
          <div className="modal-overlay__container">
            <h4>
              {lenguage === 'en'
                ? 'Cookie settings'
                : lenguage === 'pt'
                ? 'Configurações de cookies'
                : ' Configuración de Cookies'}
            </h4>

            <div>
              <>
                <div style={isIE ? { maxWidth: 960 } : null}>
                  <div>
                    <div>
                      <h6>
                        {lenguage === 'en'
                          ? 'Technical Cookies'
                          : lenguage === 'pt'
                          ? 'Cookies Técnicos'
                          : 'Cookies Técnicas'}
                      </h6>
                    </div>
                    <div>
                      <p>
                        {lenguage === 'en'
                          ? 'They are necessary to allow the operation of the basic functions of the website, such as offering secure access.'
                          : lenguage === 'pt'
                          ? 'São necessários para permitir o funcionamento das funções básicas do site, como a oferta de acesso seguro.'
                          : 'Son necesarias para permitir el funcionamiento de las funciones básicas del sitio web, como ofrecer un acceso seguro.'}
                      </p>
                    </div>
                  </div>
                  <hr />
                  <div className="modal-overlay__container-list">
                    <div>
                      <h6>
                        {lenguage === 'en'
                          ? 'Functional Cookies'
                          : lenguage === 'pt'
                          ? 'Cookies Funcionais'
                          : 'Cookies Funcionales'}
                      </h6>

                      <p>
                        {lenguage === 'en' ? (
                          <div style={{ maxWidth: 700, paddingRight: 20 }}>
                            You will be able to access the service based on
                            characteristics default such as browser type,
                            language, settings, etc.
                          </div>
                        ) : lenguage === 'pt' ? (
                          'Você poderá acessar o serviço com base nas características padrão, como tipo de navegador, idioma, configurações, etc.'
                        ) : (
                          <div style={{ maxWidth: 700, paddingRight: 20 }}>
                            Podrás acceder al servicio en función de
                            características predeterminadas como podrían ser el
                            tipo de navegador, el idioma, la configuración, etc.
                          </div>
                        )}
                      </p>
                    </div>
                    <div className="modal-overlay__container-checkbox">
                      {isIE ? (
                        <input
                          type="checkbox"
                          checked={context.state.fun}
                          onChange={handleChange}
                          name="fun"
                        />
                      ) : (
                        <label className="switch">
                          <input
                            type="checkbox"
                            checked={context.state.fun}
                            onChange={handleChange}
                            name="fun"
                          />
                          <span
                            className="slider round"
                            style={
                              context.state.fun
                                ? {
                                    backgroundColor:
                                      context.dataInfo.iebs_consent
                                        .colorButtons,
                                  }
                                : null
                            }
                          ></span>
                        </label>
                      )}
                    </div>
                  </div>

                  <div className="modal-overlay__container-list">
                    <div>
                      <h6>
                        {lenguage === 'en'
                          ? 'Analysis Cookies'
                          : lenguage === 'pt'
                          ? 'Cookies de análise'
                          : ' Cookies de Análisis'}
                      </h6>
                      <p>
                        {lenguage === 'en' ? (
                          <div style={{ maxWidth: 700, paddingRight: 20 }}>
                            Tell you when was the last time you logged in on the
                            website. Share information with partners to offer
                            you a service on our website. The information shared
                            will only be used to offer you service, product or
                            function, and never stop other purposes. Collect
                            statistical information about browsing the website.
                          </div>
                        ) : lenguage === 'pt' ? (
                          <div style={{ maxWidth: 700, paddingRight: 20 }}>
                            Indicarte cuándo fue la última vez que iniciaste
                            sesión en el sitio web. Compartir información con
                            asociados para ofrecerte un servicio en nuestro
                            sitio web. La información compartida solo se
                            utilizará para ofrecerte el servicio, el producto o
                            la función, y nunca para otros propósitos. Recopilar
                            información estadística sobre la navegación en el
                            sitio web.
                          </div>
                        ) : (
                          <div style={{ maxWidth: 700, paddingRight: 20 }}>
                            Indicarte cuándo fue la última vez que iniciaste
                            sesión en el sitio web. Compartir información con
                            asociados para ofrecerte un servicio en nuestro
                            sitio web. La información compartida solo se
                            utilizará para ofrecerte el servicio, el producto o
                            la función, y nunca para otros propósitos. Recopilar
                            información estadística sobre la navegación en el
                            sitio web.
                          </div>
                        )}
                      </p>
                    </div>
                    <div className="modal-overlay__container-checkbox">
                      {isIE ? (
                        <input
                          type="checkbox"
                          checked={context.state.ana}
                          onChange={handleChange}
                          name="ana"
                        />
                      ) : (
                        <label className="switch">
                          <input
                            type="checkbox"
                            checked={context.state.ana}
                            onChange={handleChange}
                            name="ana"
                          />
                          <span
                            className="slider round"
                            style={
                              context.state.ana
                                ? {
                                    backgroundColor:
                                      context.dataInfo.iebs_consent
                                        .colorButtons,
                                  }
                                : null
                            }
                          ></span>
                        </label>
                      )}
                    </div>
                  </div>

                  <div className="modal-overlay__container-list">
                    <div>
                      <h6>
                        {lenguage === 'en'
                          ? 'Advertising Cookies'
                          : lenguage === 'pt'
                          ? 'Cookies de publicidade'
                          : 'Cookies Publicitarias'}
                      </h6>
                      <p>
                        {lenguage === 'en' ? (
                          <div style={{ maxWidth: 700, paddingRight: 20 }}>
                            They allow us to effectively manage the supply of
                            advertising spaces on the website. They allow to
                            measure the performance of our ads and limit the
                            times that we show them to you. They allow us to
                            show you content suited to your tastes and
                            interests, both in our website as well as those of
                            third parties.
                          </div>
                        ) : lenguage === 'pt' ? (
                          <div style={{ maxWidth: 700, paddingRight: 20 }}>
                            Nos permiten gestionar de forma eficaz la oferta de
                            los espacios publicitarios de la página web.
                            Permiten medir el rendimiento de nuestros anuncios y
                            limitar las veces que te los mostramos. Nos permiten
                            mostrarte contenidos adecuados a tus gustos e
                            intereses, tanto en nuestra página web como en las
                            de terceros.
                          </div>
                        ) : (
                          <div style={{ maxWidth: 700, paddingRight: 20 }}>
                            Nos permiten gestionar de forma eficaz la oferta de
                            los espacios publicitarios de la página web.
                            Permiten medir el rendimiento de nuestros anuncios y
                            limitar las veces que te los mostramos. Nos permiten
                            mostrarte contenidos adecuados a tus gustos e
                            intereses, tanto en nuestra página web como en las
                            de terceros.
                          </div>
                        )}
                      </p>
                    </div>
                    <div className="modal-overlay__container-checkbox">
                      {isIE ? (
                        <input
                          type="checkbox"
                          checked={context.state.mar}
                          onChange={handleChange}
                          name="mar"
                        />
                      ) : (
                        <label className="switch">
                          <input
                            type="checkbox"
                            checked={context.state.mar}
                            onChange={handleChange}
                            name="mar"
                          />
                          <span
                            className="slider round"
                            style={
                              context.state.mar
                                ? {
                                    backgroundColor:
                                      context.dataInfo.iebs_consent
                                        .colorButtons,
                                  }
                                : null
                            }
                          ></span>
                        </label>
                      )}
                    </div>
                  </div>
                </div>
              </>
            </div>

            <div className="modal-overlay__container-action">
              <button onClick={handleClose}>
                {lenguage === 'en' ? 'Cancel' : 'Cancelar'}
              </button>
              <button
                onClick={handleAdmin}
                style={{
                  backgroundColor: context.dataInfo.iebs_consent.colorButtons,
                  color: '#fff',
                }}
              >
                {lenguage === 'en'
                  ? 'Save'
                  : lenguage === 'pt'
                  ? 'Salve'
                  : 'Guardar'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

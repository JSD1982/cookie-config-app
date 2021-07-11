import React from 'react';
import { globalDatacontext } from '../context/globalDatacontext';
import { isIE } from 'react-device-detect';

export default function InfoComponent() {
  window.dataLayer = window.dataLayer || [];
  const context = React.useContext(globalDatacontext);

  const lenguage = context.dataInfo.iebs_consent.language;
  React.useEffect(() => {
    if (localStorage.getItem('data_iebs') || context.cookies.data_iebs) {
      context.setBottomDrawer(false);
      context.setOpen(false);
      let dataLayer = JSON.parse(localStorage.getItem('data_iebs'));
      window.dataLayer.push({
        event: 'iebs_consent_set',
        iebs_consent: dataLayer,
      });
    } else {
      window.dataLayer.push({
        event: 'iebs_consent_set',
        iebs_consent: { ...context.state },
      });

      context.setBottomDrawer(true);
    }
  }, []);
  const handleOpenAdmin = () => {
    context.setState({ fun: true, ana: true, mar: true });
    context.setOpen(true);
  };

  const handleAcceptAll = () => {
    window.dataLayer.push({
      event: 'iebs_consent_set',
      iebs_consent: { fun: 1, ana: 1, mar: 1 },
    });
    localStorage.setItem(
      'data_iebs',
      JSON.stringify({ fun: 1, ana: 1, mar: 1 })
    );
    context.setCookie('data_iebs', { fun: 1, ana: 1, mar: 1 });
    context.setOpen(false);
    context.setBottomDrawer(false);
  };

  return (
    <>
      {context.bottomDrawer && (
        <div
          className="content-bottom-drawer"
          style={{
            backgroundColor: context.dataInfo.iebs_consent.colorBackground,
          }}
        >
          <div className="content-bottom-drawer__inner">
            <p style={{ color: context.dataInfo.iebs_consent.colorText }}>
              {lenguage === 'en' ? (
                <>
                  We use third-party cookies to improve site navigation, offer
                  you a better service and personalize the advertising we offer
                  you. By clicking "I accept" you consent to said cookies. You
                  can get
                  <a
                    href={context.dataInfo.iebs_consent.infoLink}
                    target="_blank"
                    style={{
                      color: context.dataInfo.iebs_consent.colorButtons,
                    }}
                  >
                    more information
                  </a>
                  here or click on the
                  <a
                    href="javascript: void(0)"
                    onClick={handleOpenAdmin}
                    style={{
                      color: context.dataInfo.iebs_consent.colorButtons,
                    }}
                  >
                    settings
                  </a>
                  to manage, reject and customize your cookies.
                </>
              ) : lenguage === 'pt' ? (
                <>
                  Usamos cookies de terceiros para melhorar a navegação no site,
                  oferecer um serviço melhor e personalizar a publicidade que
                  oferecemos. Ao clicar em "Aceito", concorda com os referidos
                  cookies. Você pode obter
                  <a
                    href={context.dataInfo.iebs_consent.infoLink}
                    target="_blank"
                    style={{
                      color: context.dataInfo.iebs_consent.colorButtons,
                    }}
                  >
                    mais informações
                  </a>
                  aqui ou clicar em
                  <a
                    href="javascript: void(0)"
                    onClick={handleOpenAdmin}
                    style={{
                      color: context.dataInfo.iebs_consent.colorButtons,
                    }}
                  >
                    configurações
                  </a>
                  para gerenciar, rejeitar e personalizar seus cookies.
                </>
              ) : (
                <>
                  Utilizamos cookies de terceros para mejorar la navegación del
                  sitio, ofrecerte un mejor servicio y personalizar la
                  publicidad que te ofrecemos. Al pulsar "Acepto" consientes
                  dichas cookies. Puedes obtener
                  <a
                    href={context.dataInfo.iebs_consent.infoLink}
                    target="_blank"
                    style={{
                      color: context.dataInfo.iebs_consent.colorButtons,
                    }}
                  >
                    más información
                  </a>
                  aquí o hacer clic en
                  <a
                    href="javascript: void(0)"
                    onClick={handleOpenAdmin}
                    style={{
                      color: context.dataInfo.iebs_consent.colorButtons,
                    }}
                  >
                    configuración
                  </a>
                  para gestionar, rechazar y personalizar sus cookies.
                </>
              )}
            </p>

            <button
              onClick={handleAcceptAll}
              style={{
                backgroundColor: context.dataInfo.iebs_consent.colorButtons,
              }}
            >
              <span
                style={{
                  color: context.dataInfo.iebs_consent.colorTextButton,
                }}
              >
                {lenguage === 'en'
                  ? 'Accept'
                  : lenguage === 'pt'
                  ? 'Aceito'
                  : 'Acepto'}
              </span>
            </button>
          </div>
        </div>
      )}
    </>
  );
}

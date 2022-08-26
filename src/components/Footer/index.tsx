import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { ModalContext } from '../../contexts/ModalContext';
import Container from '../UI/Container';
import NavBlueBtn from '../UI/NavBlueBtn';

const Footer = () => {
  const { setShowModal, showModal } = useContext(ModalContext);
  const navigate = useNavigate();
  const location = useLocation();
  const handleNavBtnClick = () => {
    return location.pathname !== '/' ? navigate('/') : setShowModal(!showModal);
  };

  // Styles
  const listItemStyle = `mb-1`;
  const colTitleStyle = `text-lg font-textVariable font-medium`;

  return (
    <footer className="col-span-12 py-10 border-t border-t-2 bg-slate-50 w-full">
      <Container>
        <div>
          <a href="/" className="text-2xl font-heading">
            InkNotes
          </a>

          <div className="flex flex-col gap-5 mt-3 lg:gap-20 lg:flex-row">
            <ul>
              <span className={colTitleStyle}>Navegação</span>
              <li className={listItemStyle}>
                <Link to="/sobre">Sobre</Link>
              </li>
              <li className="mb-1">
                <NavBlueBtn handleClick={handleNavBtnClick} />
              </li>
            </ul>
          </div>
          <div className="mt-14">
            <p className="text-base text-center font-variableText font-semibold text-gray-900">
              Desenvolvido por Nelson Carvalho - 2022
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};
export default Footer;

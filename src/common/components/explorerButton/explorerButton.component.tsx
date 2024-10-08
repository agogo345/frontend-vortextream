
import styled from "styled-components";

const ExplorerButtonComponent = () => {
  return (
    <StyledWrapper>
      <button className="button2">
        Explore
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .button2 {
    display: inline-block;
    transition: all 0.2s ease-in;
    position: relative;
    overflow: hidden;
    z-index: 1;
    color: #ffffff; /* Color del texto en estado normal */
    padding: 0.7em 1em;
    cursor: pointer;
    font-size: 15px;
    background: #2f3241; /* Color de fondo en estado normal */
    border: 1px solid #2f3241;
    width: 8rem;
    height: 3.7rem;
  }

  .button2:active {
    color: #ffffff;
    box-shadow: inset 4px 4px 12px #c5c5c5, inset -4px -4px 12px #ffffff;
  }

  .button2:before {
    content: "";
    position: absolute;
    left: 50%;
    transform: translateX(-50%) scaleY(1) scaleX(1.25);
    top: 100%;
    width: 140%;
    height: 180%;
    background-color: rgba(0, 0, 0, 0.05);
    border-radius: 50%;
    display: block;
    transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
    z-index: -1;
  }

  .button2:after {
    content: "";
    position: absolute;
    left: 55%;
    transform: translateX(-50%) scaleY(1) scaleX(1.45);
    top: 180%;
    width: 160%;
    height: 190%;
    background-color: #f08080; /* Color de fondo del botón en estado hover */
    border-radius: 50%;
    display: block;
    transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
    z-index: -1;
  }

  .button2:hover {
    color: #2f3241; /* Color del texto en estado hover */
    border: 1px solid #f08080; /* Color del borde en estado hover */
  }

  .button2:hover:before {
    top: -35%;
    background-color: #f08080; /* Color de fondo en estado hover */
    transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
  }

  .button2:hover:after {
    top: -45%;
    background-color: #f08080; /* Color de fondo en estado hover */
    transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
  }
`;

export default ExplorerButtonComponent;

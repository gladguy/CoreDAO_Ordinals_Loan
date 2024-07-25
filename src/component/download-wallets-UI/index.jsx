import { Col, Row, Typography } from "antd";
import { IoCloudDownload } from "react-icons/io5";
import { Link } from "react-router-dom";
import magiceden from "../../assets/brands/magiceden.svg";
import myordinals from "../../assets/logo/ordinalslogo.png";
import petra from "../../assets/wallet-logo/petra.png";
import unisat from "../../assets/wallet-logo/unisat_logo.png";
import xverse from "../../assets/wallet-logo/xverse_logo_whitebg.png";

const WalletUI = ({ isAirdrop, isPlugError }) => {
  const { Text } = Typography;
  const unisatLink = process.env.REACT_APP_UNISAT;
  const xverseLink = process.env.REACT_APP_XVERSE;
  const magicedenLink = process.env.REACT_APP_MAGICEDEN;
  const petraLink = process.env.REACT_APP_PETRA;

  return (
    <>
      <Row justify={"center"} className="mt-70">
        <img
          className="egg airdrop_claimed"
          src={myordinals}
          alt="noimage"
          style={{ justifyContent: "center", borderRadius: "25%" }}
          width="80dvw"
        />
      </Row>

      <Row justify={"center"} className="mt-15">
        <Text className="text-color-one font-large font-weight-600">
          {isAirdrop
            ? `Please ${
                isPlugError
                  ? "reconnect wallets"
                  : "connect Plug & Bitcoin wallets"
              }  to continue !`
            : "Download the below wallets !"}
        </Text>
      </Row>

      <Row justify={"center"} align={"middle"} className="mt-7" gutter={10}>
        <Col>
          <Text className="text-color-two font-small">
            To install wallets, go to portfolio and click download wallets.
          </Text>
        </Col>
        <Col>
          <IoCloudDownload
            style={{ marginTop: "10x" }}
            color="white"
            size={20}
          />
        </Col>
      </Row>

      {!isAirdrop && (
        <Row justify={"center"}>
          <Col md={20}>
            <Row
              justify={"space-evenly"}
              align={"middle"}
              className="mt-20 walletsCard"
            >
              <Col>
                <Link
                  className="iconalignment float-up-medium"
                  target="_blank"
                  to={xverseLink}
                >
                  <img
                    src={xverse}
                    alt="logo"
                    className="pointer"
                    width="50dvw"
                  />
                </Link>
              </Col>
              <Col>
                <Link
                  className="iconalignment float-up-medium"
                  target="_blank"
                  to={unisatLink}
                >
                  <img
                    src={unisat}
                    alt="logo"
                    className="pointer"
                    width="60dvw"
                  />
                </Link>
              </Col>
              <Col>
                <Link
                  className="iconalignment float-up-medium"
                  target="_blank"
                  to={magicedenLink}
                >
                  <img
                    src={magiceden}
                    alt="logo"
                    className="pointer"
                    width="60dvw"
                  />
                </Link>
              </Col>
              <Col>
                <Link
                  className="iconalignment float-up-medium"
                  target="_blank"
                  to={petraLink}
                >
                  <img
                    src={petra}
                    alt="logo"
                    className="pointer avatar"
                    width="60dvw"
                  />
                </Link>
              </Col>
            </Row>
          </Col>
        </Row>
      )}
    </>
  );
};

export default WalletUI;

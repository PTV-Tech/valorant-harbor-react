import React, { useState } from 'react';
import {Container, Modal, Tab, Nav} from 'react-bootstrap';
import Image1 from '../../images/icon-1.png';
import Image2 from '../../images/icon-2.png';
import Image3 from '../../images/icon-3.png';
import Image4 from '../../images/icon-4.png';

const Profile = () => {

  const [show, setShow] = useState(false);
  const [selectedEmbed, setSelectedEmbed] = useState('')

  function toggleActive(embed)
  {
    setShow(true)
    setSelectedEmbed(embed)
  }

  const slidesData = [
    {
      id: 'first',
      name: "Thủy Triều Dâng Trào ",
      src: 'https://i.ytimg.com/vi/01dQgCOYUoM/maxresdefault.jpg',
      embed: "https://www.youtube.com/embed/01dQgCOYUoM"
    },
    {
      id: 'second',
      name: "Thủy Khiên",
      src: 'https://i.ytimg.com/vi/JJ5s5xXXyq4/maxresdefault.jpg',
      embed: "https://www.youtube.com/embed/JJ5s5xXXyq4"
    },
    {
      id: 'third',
      name: "Thác Đổ",
      src: 'https://i.ytimg.com/vi/PSrdDNDAk3k/maxresdefault.jpg',
      embed: "https://www.youtube.com/embed/PSrdDNDAk3k"
    },
    {
      id: 'four',
      name: "Thủy Nộ",
      src: 'https://i.ytimg.com/vi/mYyCXjyQt54/maxresdefault.jpg',
      embed: "https://www.youtube.com/embed/mYyCXjyQt54"
    },
  ];

  return (
    <>
      <section className="section bg-profile">
        {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
        <h3 className="text-center color-dark-blue m-b-0 m-t-0">HARBOR<span className="color-light p-l-30 p-r-30">//</span>TIỂU SỬ</h3>
        <Container>
          <div className="narrow mx-auto text-center">
            <p className="sub-title">Xuất thân từ vùng bờ biển của Ấn Độ, Harbor nhấn chìm chiến trường bằng thứ công nghệ cổ xưa có khả năng điều khiển nước. Hắn tung ra những ngọn thác hung dữ và những con sóng bạc đầu để bảo hộ cho đồng đội và đè bẹp kẻ thù.</p>
          </div>
        </Container>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <div className="skill">
            <div className="col-left">
              <h3 className="color-black">KỸ NĂNG ĐẶC BIỆT</h3>
              <Nav variant="pills" className="list-skill">
                <Nav.Item>
                  <Nav.Link eventKey="first"><img src={Image1} alt="" /></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second"><img src={Image2} alt="" /></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third"><img src={Image3} alt="" /></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="four"><img src={Image4} alt="" /></Nav.Link>
                </Nav.Item>
              </Nav>
            </div>
            <div className="col-right">
              {slidesData.map((slide, idx) => (
                <Tab.Content key={slide.id}>
                  <Tab.Pane eventKey={slide.id}>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a onClick={() => toggleActive(slide.embed)}>
                      <div className="wrap-image">
                        <img src={slide.src} alt=""/>
                      </div>
                    </a>
                  </Tab.Pane>
                </Tab.Content>
              ))}
            </div>  
          </div>
          <div className="description-skill">
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <p>E- Thủy Triều Dâng Trào</p>
                <p>TRANG BỊ 1 bức tường nước. Nhấn BẮN để phóng nguồn nước về phía trước dọc mặt đất. GIỮ phím BẮN để điều khiển nguồn nước theo hướng tâm ngắm, xuyên qua địa hình và tạo ra một bức tường trên đường đi. Nhấn CHẾ ĐỘ PHỤ khi đang điều khiển để ngắt sớm kỹ năng. Những người chơi trúng chiêu BỊ LÀM CHẬM</p>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <p>Q - Thủy Khiên</p>
                <p>TRANG BỊ 1 quả cầu thủy khiên. Nhấn BẮN để ném. Nhấn CHẾ ĐỘ PHỤ để ném tầm thấp. Khi chạm đất, tạo ra một lớp khiên nước có khả năng chặn đường đạn</p>
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <p>C - Thác Đổ</p>
                <p>TRANG BỊ 1 con sóng nước. Nhấn BẮN để phóng con sóng lăn về phía trước dọc theo tường. TÁI SỬ DỤNG để làm con sóng dừng di chuyển. Những người chơi trúng chiêu BỊ LÀM CHẬM.</p>
              </Tab.Pane>
              <Tab.Pane eventKey="four">
                <p>X - Thủy Nộ</p>
                <p>TRANG BỊ sức mạnh Tạo Vật tối đa. Nhấn BẮN để triệu hồi 1 suối nước phun trào trên mặt đất. Những kẻ địch trong vùng ảnh hưởng sẽ bị những đợt phun trào nhắm tới. Nếu một đợt phun trào đánh trúng người chơi, họ sẽ bị LÀM CHOÁNG.</p>
              </Tab.Pane>
            </Tab.Content>
          </div>
        </Tab.Container>
      </section>
      <Modal show={show}
        onHide={() => setShow(false)} centered>
        <Modal.Body>
          <div className="container-iframe">
            <iframe src={selectedEmbed} width="100%" height="auto" title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen className="responsive-iframe" />

          </div>
        </Modal.Body>
      </Modal>

    </>
  );
};

export default Profile;

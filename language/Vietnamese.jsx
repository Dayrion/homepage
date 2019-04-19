import React from "react";

export const BODY = (faq) => (
  <div>
    <h1>Open Multiplayer</h1>
    <p>
      Một bản mod online cho <em>Grand Theft Auto: San Andreas</em> sẽ hoàn toàn được tích hợp với chế độ chơi online hiện nay <em>San Andreas Multiplayer (SA-MP).</em>
    </p>
    <br />
    <p>
      Điều này có nghĩa là <strong>hệ thống SA:MP cho máy khách và kịch bản (scripting) SA:MP sẽ hoạt động tương thích với open.mp</strong>. Đồng thời, nhiều lỗi còn tồn đọng sẽ được sửa chửa mà không cần đến sự can thiệp của hacks và các bản vá không chính thống nữa.
    </p>
    <p>
      Nếu bạn đang thắc mắc làm thế nào để có thể đóng góp vào dự án khi được phát hành công khai (public release), vui lòng truy cập <a href="https://www.burgershot.gg/showthread.php?tid=99">chuyên mục này</a> để biết thêm thông tin chi tiết.
    </p>
    <h1>
      <a href={faq}>FAQ (Câu hỏi thường gặp)</a>
    </h1>
  </div>
);

export const FAQ = () => (
  <div>
    <h1>FAQ</h1>
    <hr />
    <h2>open.mp là gì?</h2>
    <p>open.mp (Open Multiplayer - OMP) là một bản mod online thay thế cho San Andreas Multiplayer, OMP được khởi động và tạo ra với mục đích xử lý những vấn đề còn tồn đọng trong các bản cập nhật cũng như cách quản lý của SA-MP. Bản phát hành đầu tiên chỉ là một bản phát hành máy chủ (server). Các SA:MP clients vẫn có thể kết nối với máy chủ OMP. Trong tương lai, những open.mp client sẽ được ra mắt, kèm theo đó là những đổi mới thú vụ hơn được cập nhật.</p>
    <hr />
    <h2>Đây là một bản rẻ nhánh?</h2>
    <p>Không. Đây là một sản phẩm hoàn chỉnh với việc áp dụng gần một thập kỷ kiến thức và kinh nghiệm mà nó mang lại. Trước đây đã có những bản phát hành rẻ nhánh của SA-MP, nhưng có hai vấn đề lớn chúng ta cần quan tâm:</p>
    <ol>
      <li>Những bản rẽ nhánh dựa vào mã nguồn bị rò rỉ (bị ăn cắp) của SA-MP. Những tác giả của bản rẻ nhánh không có quyền can thiệp hay sử dụng những code nay, với lí do đấy khiến luôn là kẻ phía sau,cả về đạo đức hay pháp lý. Chúng tôi không chấp nhận hành động này. Vì vậy khiến cho tốc độ phát triễn của OMP bị cản trở. Nhưng đây là một bước đi đúng đắn.</li>
      <li>Họ đã cố gắng tái thiết lập quá nhiều thứ trong cũng một lúc. Họ thay thế những công cụ scripting, hay loại bỏ đi những tính năng để thêm các tính năng mới, hoặc họ chỉ cố gắng chỉnh sửa mọi thứ theo một con đường sai lầm. Điều này ngăn cản các máy chủ hiện nay với hệ thống code và player tham gia vào, vì họ cần phải xây dựng lại hế thống của máy chủ, nếu không phải tất cả, những code của họ - Một công việc đầu tiềm năng. Chúng tôi hoàn toàn có ý định thêm các tính năng và điều chỉnh mọi thứ theo thời gian, nhưng chúng tôi cũng cần tập trung vào việc hỗ trợ với các máy chủ hiện có, cho phép chúng sử dụng mã của chúng tôi mà không thay đổi mã của chúng.</li>
    </ol>
    <hr />
    <h2>Vì sao chúng tôi làm điều này?</h2>
    <p>Mặc dù đã có nhiều nỗ lực để thúc đẩy SA: MP phát triển tốt hơn, dưới hình thức những lá đơn gợi ý, những lời đề nghị hài hước và đề nghị giúp đỡ từ nhóm BETA; cùng với một cộng đồng lớn luôn sẵn sàng mọi lúc; không có tiến triển nào được diễn ra cả. Điều này được nhiều người cho rằng đơn giản chỉ là thiếu sự quan tâm từ phía lãnh đạo, bản thân nó không phải là vấn đề, nhưng không có sự phát triễn. Thay vì trao quyền điều hành để phát triển cho những người quan tâm đến việc tiếp tục làm việc với bản mod, người sáng lập chỉ muốn tự mình làm mọi thứ, với lí do mọi thứ càng lâu càng tốt cho cố gắng ít ỏi. Một số người cho rằng điều này là vì lý do thu nhập thụ động, nhưng không có bằng chứng về điều đó. Tuy quyền lợi rất lớn, theo đó là một cộng đồng mạnh mẽ, anh ấy cho rằng bản mod chỉ có thể tồn tại thêm 1-2 năm nữa, cho rằng những thứ mà cộng đồng đã làm rất chăm chỉ để phát triễn SA: MP như ngày nay không xứng đáng được tiếp tục nữa.</p>
    <br />
    <p>Điều này thật vô lý!</p>
    <hr />
    <h2>Ý kiến ​​của bạn về Kalcor/SA:MP/hay cái gì đó?</h2>
    <p>Chúng tôi yêu SA:MP, đó là lý do tại sao chúng ta ở đây ngay từ đầu - và chúng tôi nợ việc tạo ra điều đó cho Kalcor. Anh ấy đã cống hiến một nguồn vốn rất lớn trong những năm qua, những đóng góp đó sẽ không bị lãng quên hoặc bỏ qua. Các hành động dẫn đến open.mp được xây dựng vì chúng tôi không đồng ý với một số quyết định gần đây, mặc dù đã nhiều lần cố gắng phát triễn mod theo một hướng tốt hơn, nhưng tất cả đều bị bác bỏ. Do đó, chúng tôi buộc phải đưa ra quyết định là cố gắng tiếp tục SA: MP trong tinh thần mà không có Kalcor. Đây không phải là một hành động chống đối cá nhân với anh ta, avà không nên được coi là một cuộc tấn công vào cá nhân anh ta. Chúng tôi sẽ không đồng ý bất kỳ lời lăng mạ cá nhân chống lại bất cứ ai - bất kể họ đứng ở đâu trong dự án open.mp; chúng ta sẽ có thể có một cuộc tranh luận hợp lý mà không cần dùng đến các cuộc tấn công quảng cáo.</p>
    <hr />
    <h2>Đây có phải là hành động chia tách cộng đồng?</h2>
    <p>Đó không phải là ý định của chúng tôi. Lý tưởng của chúng tôi không phải là sự phân tách, nhưng cần phải tách ra một số và lưu giữ còn tốt hơn là chứng kiến sự sụp đổ. Trong thực tế, kể từ khi bản mod này được công bố, một số lượng lớn cộng đồng không phải người sử dụng English cũng đã tham gia với cộng đồng. Những cộng đồng này đã dần dần bị đẩy ra và xếp hàng trước đó. Vì vậy, sự quy tụ của họ thực sự mang lại một sự tái tập hợp cộng đồng đã từng bị chia rẽ trở lại với nhau. Một số lượng lớn người đã bị ban từ các diễn đàn chính thức của SA: MP (một số trường hợp, toàn bộ sản phẩm của họ đã bị xóa bỏ), nhưng chính Kalcor đã chỉ ra rằng các diễn đàn chính thức không phải là SA:MP, đó chỉ là một phần của SA:MP. Nhiều người chơi và nhà phát hành chưa bao giờ hoạt động trên đó, hoặc thậm chí tham gia các diễn đàn đó; vì vậy nói chuyện với những người này một lần nữa là cách tốt nhất để thống nhất thêm nhiều phần của cộng đồng lại với nhau.</p>
    <hr />
    <h2>Vì nó là "Open" Multiplayer, nên đây sẽ là nguồn mở?</h2>
    <p>Vâng, nếu như đúng theo kế hoạch là vậy. Hiện tại chúng tôi đang cố gắng làm cho sự phát triển trở nên truyền thông và minh bạch (mà bản thân nó là một sự cải tiến), sẽ hướng tới mã nguồn mở và khi chúng ta có thể, một khi mọi thứ đã được sắp xếp và ổn định hoàn toàn.</p>
    <hr />
    <h2>Khi nào nó sẽ được phát hành?</h2>
    <p>Đây là mọt câu hỏi quên thuộc, vì thế nên câu trả lời cũng rất quen thuộc: khi chúng tôi sẳn sàng. Đơn giản là không có cách nào để biết một dự án như thế này sẽ mất bao lâu mới có thể hoàn thành. Dự án đã được triển khai ngâm một khoảng thời gian trước đó, và đã thấy một vài biến động trong các cấp độ hoạt động, tùy thuộc vào mức độ chăm chỉ của mọi người. Nhưng yên tâm rằng nó vẫn đang theo đúng tiến độ, và tiến triển nhanh nhờ một số quyết định thiết kế cơ bản (chúng ta sẽ nói nhiều hơn vào lúc khác).</p>
    <hr />
    <h2>Tôi có thể giúp gì?</h2>
    <p>Hãy hoạt động thường xuyên trên các diễn đàn. Chúng tôi có một chủ đề cho liên quan đến điều này, và sẽ giữ cho nó được cập nhật khi có thêm dự án. Trong khi dự án được tiết lộ sớm hơn một chút so với dự định, chúng tôi đang trên con đường tới đích để phát hành nóu,nhưng điều đó không có nghĩa là sự giúp đỡ không phải lúc nào cũng được đánh giá cao. Cảm ơn bạn vì đã quan tâm, và tin tưởng vào dự án:</p>
    <br />
    <a href="https://www.burgershot.gg/showthread.php?tid=99">
      <u>"Tôi có thể giúp đỡ như thế nào>" tại (burgershot.gg)</u>
    </a>
    <hr />
    <h2>Burgershot.gg là gì?</h2>
    <p>burgershot.gg là một diễn đàn trò chơi, chỉ đơn giản như vậy. Rất nhiều người tham gia, có một số bản cập nhật và phát triển OMP được đăng ở đó. Nhưng chúng là hai dự án độc lập. Họ không phải là diễn đàn OMP, OMP cũng không phải là tài sản của burgershot. Khi một trang web OMP hoạt động, hai trang web có thể được tách ra khỏi nhau (như SA:MP đã từng được GTAForums lưu trữ trước khi trang web chính hoạt động).</p>
    <hr />
    <h2>Còn OpenMP thì sao?</h2>
    <p>Open Multi-Processing project là "OpenMP", chúng ta là "open.mp". Chả có sự liên hệ nào mới nhau cả.</p>
    <p>Vietnam - #Beer - 19/04/2019</p>
  </div>
);

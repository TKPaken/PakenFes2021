export interface GameInfo {
    id: string;
    title: string;
    picture: string;
    downloadUrl: string;
    description: string;
    review: string;
    movie: string;
}

export let gameData: GameInfo[] = [
    {
        id: "blow",
        title: "Blow Shooting (nuhunune)",
        picture: "/assets/img/games/blow-shooting.png",
        downloadUrl: "https://drive.google.com/drive/folders/1cwAsU95wjdlELqJNKq-Z-2Q3cQMl-KcX?usp=sharing",
        description: "タイトルの通りターゲットに照準を合わせてSHOOTするゲームです。弾を撃つ時、ターゲットにヒットしたときなどに一々効果音をつけることで、爽快感のある仕上がりに出来たと思います。\n更にオリジナル要素として、Blow、つまり竜巻を撃つことが出来るようにしました(英語にはノーコメントでお願いします)。\n地形の後ろに隠れているターゲットを浮き上がらせてヒットする時の気持ちよさを、是非体験して頂きたいです！",
        review: "全体的に良いアプリだったと思う。まず、ゲームの構想として竜巻を起こせるようにするという発想が面白かった。竜巻を出すキャラというと、中ボスが多いと思う(偏見)。これをプレイヤーが動かす人に導入することは中々思いつかないであろうと思う。ただ、この竜巻を使う中でも、難易度3以降は、竜巻で物を吹き上げると、複数個打たなければいけなくなる。このことにより、難易度2と難易度3の間の崖が非常に高くなってしまっている。よって、難易度2で竜巻を利用してかつ、複数個打たなければいけないが簡単な場所を用意した方が良かったのではないかと思う。",
        movie: "https://www.youtube.com/embed/xtemc55awd0"
    },
    {
        id: "infinity",
        title: "infinity run (Californium)",
        picture: "/assets/img/games/infinity-run.png",
        downloadUrl: "https://drive.google.com/drive/folders/1UIBk3xu760yAgUO2fMEY_oApZCsLnjkr?usp=sharing",
        description: "進んでいくとあるコインを取りながら、障害物を避けてできるだけ前に進む、というゲームです。スペースキーでジャンプし、障害物をよけましょう。押されてしまい、画面外に出てしまうとゲームオーバーです。コインは1つで777点加点されます。このゲームにはレベルが存在し、レベルが上がるほど障害物の感覚が狭まります。しかしその分加点されるので、頑張りましょう。",
        review: "背景デザインや音楽が流れる点、プレイヤーにしっかりとしたアニメーションが付けられている点などで、ゲームとしての完成度が追求されていた。実際のゲーム内容も良くできており、ストレスは感じなかったし、コイン枚数の最大化と走行距離のトレードオフという戦略性があり楽しめた。参考までに私の最高スコアは116414点であった。開発中のプロジェクトファイルを見る機会があったが、ソースコードの保守性や、ファイル構造などが大規模な開発に耐えうると思われるほど作り込まれていた。制作者が中学1年生であり、プログラミング自体を初めて触ってから半年程度であることを考えるとかなり良くできていると言えるだろう。ただ、制作期間の短さが原因なのであろうが、UIや素材に多少雑なところが散見され、ゲームシステムにも改善の余地があるように思う。制作の仕方は素晴らしいので、次作にも期待したい。",
        movie: "https://www.youtube.com/embed/QxW-HC8lyS0"
    },
    {
        id: "maze",
        title: "Maze (Forested)",
        picture: "/assets/img/games/maze.png",
        downloadUrl: "https://drive.google.com/drive/folders/1aF4kdyBoh3e_IJ9YdtT-Dsx4FpUpBft-?usp=sharing",
        description: "これは迷路を探検するゲームにしたかったものです。ゲームと呼べるのかはわかりません。左右キーで方向転換ができます。スペースキーで前に進むことができます。ところどころに黄色い床があると思います。これを踏むと、赤い壁が消え、代わりに青い壁が出現します。もう一度踏むと元に戻ります。緑の床を探し、踏むことができたらクリアです。壁に近づくと向こう側が見えてしまいます。仕様です。",
        review: "やってみました。11 分で完走しました。（タイムに自信アリ）正直これを作られると、ぜえぜえ言いながらピコハンを回すだけのゲームを作った僕の面子が無くなるのでやめて欲しかったです。（意訳: 技術が高すぎる、人生のゲームバランスを調整してほしい）しかも、凄いのは技術力だけでなくアイデアもなんですよね。スイッチで壁が切り替わるのは斬新で面白かったです。特に、スイッチ大量地帯？みたいなのに入った時には ” 本物の迷路 “ に入った気分になりました。運良く脱せたからいいものの、脱出に失敗すると悲惨なことになりそうです。さて、ここまで良いところを言ってきましたが、最後に 1 つだけ。十字キーだけで操作できるようにしてください！！！最初 1 歩も歩けなくて悲しかったので、お願いします...（説明書を読まないのが悪い）",
        movie: "https://www.youtube.com/embed/fkRGMl2Z2gk"
    },
    {
        id: "pikohammer",
        title: "ピコピコハンマー (penguinman)",
        picture: "/assets/img/games/pikohammer.png",
        downloadUrl: "https://drive.google.com/drive/folders/1S42owKPqEzkEJr3VgcXwLkSPkI6qAqcc?usp=sharing",
        description: "ピコピコハンマーから逃げるゲームです。ルールや操作方法はプログラム内に書いてあるので、そちらを見てください。一応裏実装として z ボタンを押すと何かが起きます。飽きてきたら押してみてください。",
        review: "とても難しかったです。まず、始めるとピコピコハンマーが回転しながら近づいてきます。これが、幣校の音楽教師の挙動にとても似ているのです。ピコピコハンマーで殴られた回数で自慢をし合うというクラスの伝統と重なり合い、ピコピコハンマーに自分から近づいて行ってしまいます。実際、私はレベル1すらクリアできませんでした。ゲームとしては・リトライボタンがある・レベルが五段階あるなど、非常に充実していると思いました。",
        movie: "https://www.youtube.com/embed/UJbZJFwjizU"
    },
    {
        id: "doppel",
        title: "Doppelganger (Thistle)",
        picture: "/assets/img/games/doppel.PNG",
        downloadUrl: "https://drive.google.com/drive/folders/1MjeGCI1vlhui63CJJ27cXs0vEdSV70C0?usp=sharing",
        description: "世界に彷徨うドッペルゲンガーに見つからないよう逃げるゲームです。ゴール地点の黄金の良く分からない像に触れることで脱出できます。身体を一切動かさずに移動し、たまにフィギュアスケーターのように回転するドッペルゲンガーの恐怖からあなたは逃げ切れるか？？",
        review: "このゲーム、とてもとても怖かったです。まず、説明のところで薄暗い背景に不気味な感じの文章が書かれていて、これを見ただけで震え上がりました。とてもよく作り込まれているな、と思いました。実際にゲームをプレイしてみると、これがまたすごかったです。ドッペルゲンガーを見てしまわないように、と慎重になるゲーム性が余計に恐怖を煽ります。また、うっかりドッペルゲンガーを見てしまった時の急に現れるゲームオーバーの画面がトラウマになります。このゲームを夜にやったのですが、本当に怖くて泣きそうになっています...",
        movie: "https://www.youtube.com/embed/LQ5ZQI_MUVs"
    },
    {
        id: "block",
        title: "ブロック崩し (cpcznksutbeoa)",
        picture: "/assets/img/games/block.jpg",
        downloadUrl: "https://drive.google.com/drive/folders/1XjXkWC5dksO2-tNCixmtj4b8xIl6dLDv?usp=sharing",
        description: "このアプリは、パドルでボールを跳ね返してブロックを壊す、ブロック崩しです。パソコンのマウス等によって動く、矢印の横方向の位置にパドルの中心がきます。ボールを跳ね返して、できるだけ多くのブロックを壊しましょう！全てのブロックを壊すと、ボールの速度が少し速くなってより高いレベルをプレイできます。画面に写っている場所より下にボールが行ってしまうと、ゲームオーバーになります。",
        review: "一回目：300点台 二回目：5点(!?) 三回目：1205点(全消しに一度成功)黒画面にタイル状に並んだターゲットと打ち返し用の棒があるだけの、至ってシンプルな画面構成でした。無駄なものがなくてわかりかすかったです。そのシンプルな中でも、打ち返し棒が返す方向をバラバラにするという工夫がされていました。これによって、単調なゲームを行っていたら突如難しくなるというアクセント(実際にやるとわかりますが結構ドキッとします)が入るようになっており、プレイしていても意外と飽きが来なかったです。この単純さのブロック崩しゲームとしては結構いいものに仕上がっていると思います。改善点を挙げるとすれば、「爽快さ」がもう少し欲しかったように思います。ブロック崩しの名物の一つが、ターゲット群の後ろに弾を潜り込ませたときにものすごい速さで破壊されるターゲット。ブロック崩しをやるときに目指すところであり、出来たときにはお祭りが始まったかのように楽しくなるでしょう。ところがこのゲームではターゲットの後ろの隙間が割合大きいせいで、後ろに弾を入れられてもいまいち盛り上がりに欠けるように思います。打ち返しの特性上浅い角度で後ろに入れるのが非常に難しく、深い角度でも後ろに入れられるようにあの隙間が空いているのだと思いますが、何らかの方法でここを改善できたらいいかな〜と思いました。改善方法の例として、早送りボタンを実装するのはどうでしょう。ボタンを押している間、弾の速度を早めるのです。これによって爽快感が増しますし、のんきに早送りボタンを押している間に落ちてきて自爆するのを防ぐというゲーム性も増えて一石二鳥です。あとは、効果音を付けてみるのも面白いかも知れません。どうかご検討お願いします。長ったらしく書いてきましたが、私にとっては十分楽しめるゲームでした。そのことを評価して、筆を置きたいと思います。",
        movie: "https://www.youtube.com/embed/wUvHZfLsFuw"
    },
    {
        id: "convex",
        title: "Convex Hull Visualizer (Ebishu)",
        picture: "/assets/img/games/convex.JPG",
        downloadUrl: "https://drive.google.com/drive/folders/1ovq0KcJvWVb287ECLxu0yoxQbBcHNl81?usp=sharing",
        description: "凸包を計算するアルゴリズムの一つである「andrew's monotone chain algorithm」のビジュアライザです。andrew's monotone chain algorithmとは点の数をnとすると、凸包をO(n log n)で求めることができるアルゴリズムです。点をx座標でソートした後、上側の凸包を下側の凸包を別々に計算し、併合して凸包を求めます。",
        review: "andrew's monotone chain algorithmというものを元に作ったアプリらしいですが、とても分かりやすかったです。どんなに適当に点をうってもしっかりとすべての角が180度未満の多角形を作る点で囲ってくれます。(convex hullというらしいです)そういうものだとわかっていても見てて楽しくなります。また、どのような形ならこれをバグらせられるかと考えて点を打ってみるのも楽しいです(w)まあ自分はできませんでしたが。頑張ってバグらせて見ましょう。またアルゴリズムについての説明がいまいち足りないような気もしましたが、某gglでアンドリューのアルゴリズムと検索すれば出てきます。",
        movie: "https://www.youtube.com/embed/4Ps3r2_vRb8"
    },
    {
        id: "tkfps",
        title: "TK_FPS (primenumberzz)",
        picture: "/assets/img/games/fps.png",
        downloadUrl: "https://drive.google.com/drive/folders/1luyv-6TIlNRPoV54zh_9K6aZwSiC-iUo?usp=sharing",
        description: "Unity公式のFPS Microgame Templateを利用し、チュートリアルを見ながら作りました。FPS Microgame Templateを使うとプログラミングの知識やコーディングも必要なく、初心者の僕でもUnityの使い方を学ぶことができました。また、作りながら、terrainを使った地形の制作などを学びました。Unityでのゲーム制作の入門としておすすめです。〆切を認識しておらず、細かい作り込みができなかったことが反省点です。",
        review: "遊んでみました。FPSが好きな僕にとってはとても本格的で、ふんだんに楽しめました。サンプルと比べ大きく地形に変更が加わっている他、課題や三角定規を持った敵など、オリジナル要素も多く、非常に夢中になって楽しめました。3Dのピコハンなどは非常に完成度が高く、感動しました。	気になった点としては、後から追加したであろう木とピコハンに当たり判定が存在しない点です。他には、ボス戦が苦しすぎる(一回で削りきれないため、何回か削る必要がある)のがつらかったです...(上手い人には造作もないと思いますが)。しかし、そんなものが感じられないほどにゲームとしての完成度はとても高く、長時間遊んでいられます。没入感がすごく、ハラハラドキドキできるので、やってみる価値は十分にあると思います！",
        movie: "https://www.youtube.com/embed/RqpVxNXZ2EE"
    },
    {
        id: "cramming",
        title: "CrammingGame2.1.1 (Thistle)",
        picture: "/assets/img/games/cramming.PNG",
        downloadUrl: "https://drive.google.com/drive/folders/1Q6ySLBOoRbi4OqewHy9Lz093puJn5JQI?usp=sharing",
        description: "期末対策用に作ったアプリケーションです。簡単に説明すると「デジタル無限単語帳 With 問題セット機能付き」です。自分で作った問題集から無限に問題を出してくれます。自分で使うように作ったのでかなり高機能です。",
        review: "404 Notfound...",
        movie: "https://www.youtube.com/embed/e1f76KoijFg"
    },
    {
        id: "fpsgame",
        title: "fps game (児玉)",
        picture: "/assets/img/games/fps-game.PNG",
        downloadUrl: "https://drive.google.com/drive/folders/1r65BvJb-1FyEHJEnUmX1gfvGwp0SMrGa?usp=sharing",
        description: "これはユニティ公式が作成したfpsのチュートリアルでできるゲームを少し改造したものです。",
        review: "相手から攻撃を受けないギリギリのところから打つのがとても楽しいです。ショットガンなどの効果音も良いですね。自分は3Dに弱いみたいで、すぐ酔ってしまいました...",
        movie: "https://www.youtube.com/embed/tUVOcsIH-Fg"
    },
];

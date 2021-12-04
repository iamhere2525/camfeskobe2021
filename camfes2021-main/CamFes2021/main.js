const app = new Vue({
  el: "#app",
  data: {
    tabNum: 0,
    correctImage: -1,
    titles: ["開会式","尼子の部屋1","ライブペイント","イントロ","音楽祭","Booo!踊ってみた","メインステージCM1","ゲームブースCM1","ギネス","メインブースCM2","マリカー","ダンスステージ","尼子の部屋2","英語禁止","カラオケ","ゲームブースCM2","Adorer fashion in Kobe","スマブラ","閉会式"],
    questions: [
      {
        question: "開会式のキーワードを打ってね",
        input: "",
        correct: "温厚",
      },
      {
        question: "尼子の部屋1のキーワードを打ってね",
        input: "",
        correct: "テキパキ",
      },
      {
        question: "ライブペイントのキーワードを打ってね",
        input: "",
        correct: "働き者",
      },
      {
        question: "イントロのキーワードを打ってね",
        input: "",
        correct: "忍者",
      },
      {
        question: "音楽祭のキーワードを打ってね",
        input: "",
        correct: "ミュージシャン",
      },
      {
        question: "Booo!踊ってみたのキーワードを打ってね",
        input: "",
        correct: "はりきりボイス",
      },
      {
        question: "メインステージCM1のキーワードを打ってね",
        input: "",
        correct: "マイペース",
      },
      {
        question: "ゲームブースCM1のキーワードを打ってね",
        input: "",
        correct: "おしゃれさん",
      },
      {
        question: "ギネスのキーワードを打ってね",
        input: "",
        correct: "お茶目",
      },
      {
        question: "メインブースCM2のキーワードを打ってね",
        input: "",
        correct: "生徒たちの鬼",
      },
      {
        question: "マリカーのキーワードを打ってね",
        input: "",
        correct: "声が通る人",
      },
      {
        question: "ダンスステージのキーワードを打ってね",
        input: "",
        correct: "詐欺師or謎の資格保有者",
      },
      {
        question: "尼子の部屋2のキーワードを打ってね",
        input: "",
        correct: "マレフィセント",
      },
      {
        question: "英語禁止のキーワードを打ってね",
        input: "",
        correct: "意外にボケ担当",
      },
      {
        question: "カラオケのキーワードを打ってね",
        input: "",
        correct: "持ち上げ上手",
      },
      {
        question: "ゲームブースCM2のキーワードを打ってね",
        input: "",
        correct: "インテリヤクザ",
      },
      {
        question: "Adorer fashion in Kobeのキーワードを打ってね",
        input: "",
        correct: "内側からドアをノックする人",
      },
      {
        question: "スマブラのキーワードを打ってね",
        input: "",
        correct: "天然ゴリラ",
      },
      {
        question: "閉会式のキーワードを打ってね",
        input: "",
        correct: "独り言が多い",
      },

    ],
    bonusContents: [
      {
        explain: "吉永先生【小さい頃はものすごく恥ずかしがり屋で、カメラも苦手だったのであまり笑顔の写真がありませんでした😭】",
        image: "yoshinagababy.JPG",
      },
      {
        explain: "飯田さん【幼稚園の頃の将来の夢は、お肉屋さんでした〜！】",
        image: "iidababy.JPG",
      },
      {
        explain: "藤本さん【小学生の頃は“運動会で目立った活躍をすること”に命かけてました🏃‍♀️騎馬戦で最後まで勝ち上がる、組体操のピラミッドで一番上に立つ、リレーのアンカーで一番になる！！など…6年生の時は騎馬戦負けてガチ泣きしたな…（父親が勉強よりスポーツ頑張った時の方が褒めてくれたのできっとその影響。笑",
        image: "fuzimotobaby.jpg",
      },
      {
        explain: "小林さん【幼稚園の卒業式の写真！歯が生え替わってる時期なので、歯抜けです。】",
        image: "kobayashibaby.jpg",
      },
      {
        explain: "赤木さん【ずっとスマッシュブラザーズをしてました！】",
        image: "momokobaby.jpg",
      },
      {
        explain: "うねのさん【中学の入学式の写真です.実は釆野,中学１年まで右と左の区別がつかず,よく反対方向を向いたりしていました. あと今よりさらに目つき悪い】",
        image: "unenobaby.jpg",
      },
      {
        explain: "吉野先生【",
        image: "yoshinobaby.JPG",
      },
      {
        explain: "山田さん【幼稚園に入る前、将来の夢は「みどり」でした！】",
        image: "yamadababy.JPG",
      },
      {
        explain: "三吉さん【幼稚園生の頃、ミンティアにハマっていました。】",
        image: "miyoshibaby.JPG",
      },
      {
        explain: "吉永先生【今では授業中みんなに注意していますが、高校時代は授業中よく寝る生徒でした…。よくうとうとしていたので「吉永！船漕ぐな！」と怒られていました😭（ちゃんと授業受けておけば良かったなーと後悔しているのでみんなは気をつけてね）】",
        image: "yoshinagababy2.JPG",
      },
      {
        explain: "綾井さん【「電卓打ってそう！」と褒められたことがあります！この頃が人生で１番しっかり者でした😍】",
        image:  "ayaibab.jpg",
      },
      {
        explain: "村尾先生【幼少期、母親の眼鏡を隠して遊んでいましたが、眼鏡を隠していたあの箱はゴミ箱だったと数年後にふと気付きました。】",
        image: "muraobaby.jpg",
      },
      {
        explain: "筧先生【昔はショートヘアだったせいか、よく男の子に間違えられていました。】",
        image: "kakehibaby.jpg",
      },
      {
        explain: "円城寺さん【この時期は常に外で走り回っていたので、まっくろくろすけでした🧡】",
        image: "momokoobaby.JPG",
      },
      {
        explain: "川嵜さん【めちゃくちゃお喋りですごくうるさい幼少期でした。この写真からすると、歌うのも好きそうですね。】",
        image: "kawasakibaby.jpg",
      },
      {
        explain: "本多さん",
        image: "hondababy.jpg",
      },
      {
        explain: "湊本さん【女の子の尻に敷かれてたらしい】",
        image: "minatomotobaby.jpg",
      },
      {
        explain: "芦田さん【自分で髪の毛をハサミで切って、親によく怒られてました。自分は髪の毛が鬱陶しかったから切っていたのですが、親は本気で心配していました。】",
        image:  "ashidababy.jpg",
      },
      {
        explain: "山田さん【幼稚園に入る前、将来の夢は「みどり」でした！母いわく、プリキュアとかヒーローとかのじゃなくてクレヨンの緑指差して答えてたらしい…】    最後におまけの齊田さんもどうぞ💝【よくそのへんに落ちてるもの食べてました】",
        image: "yamadachan.pnG",
      },

    ]
  },
  computed: {
    tabClass: function() {
      return function (index) {
        const tabColor = index % 3;
        return ["tab-title", "title" + tabColor];
      }
    }
  },
  methods: {
    answer(index) {
      if (this.questions[index].input === this.questions[index].correct) {
        this.correctImage = index;
      } else {
        alert("違うよ！");
      }
    }
  }
})

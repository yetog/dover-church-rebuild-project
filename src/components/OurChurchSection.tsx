import React from 'react';

const faithStatements = [
  'God calls the worlds into being, creates humankind in the divine image, and sets before us the ways of life and death.',
  'God seeks in holy love to save all people from aimlessness and sin.',
  'God judges all humanity and all nations by that will of righteousness declared through prophets and apostles.',
  'In Jesus Christ, the man of Nazareth, our crucified and risen Lord, God has come to us and shared our common lot, conquering sin and death and reconciling the whole creation to its Creator.',
  'God bestows upon us the Holy Spirit, creating and renewing the church of Jesus Christ, binding in covenant faithful people of all ages, tongues, and races.',
  'God calls us into the church to accept the cost and joy of discipleship, to be servants in the service of the whole human family, to proclaim the gospel to all the world and resist the powers of evil, to share in Christ\u2019s baptism and eat at his table, to join him in his passion and victory.',
  'God promises to all who trust in the gospel forgiveness of sins and fullness of grace, courage in the struggle for justice and peace, the presence of the Holy Spirit in trial and rejoicing, and eternal life in that kingdom which has no end.',
];

const OurChurchSection = () => {
  return (
    <>
      {/* Our Church */}
      <section id="our-church" className="section-padding bg-gray-300 dark:bg-[#0f0a10]">
        <div className="container-max">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-church-500 dark:text-church-300 mb-4">
              About Us
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-church-800 dark:text-white mb-8">
              Our Church
            </h2>

            <div className="space-y-6 text-church-700 dark:text-white/70 leading-relaxed">
              <p>
                The People&rsquo;s Church of Dover is a non-denominational, open and affirming, Christian Church located in downtown Dover, Delaware. We are in covenant with the United Church of Christ, as part of the Chesapeake Association under the Central Atlantic Conference.
              </p>
              <p>
                Our faith is that God speaks through the lives, experiences, and passions of every part of creation. This means that there is no &ldquo;church&rdquo; apart from the hearts and lives of all of God&rsquo;s people. No institution defines what the &ldquo;church&rdquo; is. Instead, we define our church as the dreams, fears, sufferings, triumphs, and hopes of all the people of our community.
              </p>
              <p>
                In our case, that means our congregation is all about the people of Dover. We seek to be a church that serves the needs of the people, gives voice to the people, and reflects the faith of the people. We are committed to being a part of this neighborhood, so we welcome members of the community to help us define how best we can be useful to the community.
              </p>
              <p>
                We also seek to learn from the community. Folks whose lived experiences are different, necessarily have different truths of God that they can reveal to others. We therefore invite very diverse people to come and share their ideas with us. We want to learn from you!
              </p>
              <p>
                There are two ideas from the Protestant Reformation that have led us is this direction:
              </p>
              <p>
                <strong className="text-church-800 dark:text-white">The Priesthood of all Believers</strong> is the idea that people don&rsquo;t need a church authority figure to stand between them and God. Unlike in Catholicism and Episcopalianism, we do not believe that folks need a minister to speak to God on their behalf, and they do not need someone to perform rituals for them in order for them to be at peace with God. They can go directly to God themselves!
              </p>
              <p>
                Related to this is the idea of the <strong className="text-church-800 dark:text-white">Prophethood of All Believers</strong>. This means that God can and does speak to all people. A &ldquo;prophet&rdquo; is not someone who tells the future, but someone who speaks a message from God. In the Bible, a prophet often spoke about the anger of God because the people were engaged in economic or social injustice. We believe that everyone is a potential spokesperson for God! The prophethood is not just limited to specially educated or ordained people. God often speaks through the least exalted person. Speaking for God is quite an honor, but it is also a mighty big responsibility!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statement of Faith */}
      <section className="section-padding bg-church-50 dark:bg-[#1a0a17]">
        <div className="container-max">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-church-500 dark:text-church-300 mb-4">
              What We Believe
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-church-800 dark:text-white mb-8">
              Statement of Faith
            </h2>

            <div className="space-y-6 text-church-700 dark:text-white/70 leading-relaxed">
              <p>
                In the United Church of Christ, we have no test of faith. There is no list of faith statements that people have to agree upon in order to become a part of our religious community. Most folks are not sure about everything that they have heard taught in church &ndash; and that is just fine with us! We welcome people form a diversity of faith perspectives. We all have different lived experiences, and that gives us different ways of thinking about the ultimate questions of life and death. So there may be people sitting next to each other in a UCC service that have different interpretations of the ancient stories, and we have no interest in forcing a single belief on anyone!
              </p>
              <p>
                So rather than have a list of things you have to believe in order to be OK with God, we just bear witness to the faith statements of the historic Christian church. Which of these statements is consistent with your ideas, and with which do you disagree? Come and tell us about it &ndash; we welcome people all along the spectrum of faith, from die-hard conservative believers, to those who have lost faith entirely and don&rsquo;t know where to go for help. As you read this Statement of Faith, notice that each statement describes an action; we believe in a God who is doing stuff, all the time, right here and right now. Our God is one who continues to guide us, continues to create new life and new possibilities, and does not simply hang-out in heaven waiting to let some of us in and send others to hell.
              </p>
              <p className="text-lg font-semibold text-church-800 dark:text-white">
                We believe in God, the Eternal Spirit, who is made known to us in Jesus our brother, and to whose deeds we testify:
              </p>
            </div>

            <ul className="mt-8 space-y-4">
              {faithStatements.map((statement, index) => (
                <li key={index} className="flex gap-4">
                  <span className="flex-shrink-0 w-2 h-2 mt-2.5 rounded-full bg-church-600 dark:bg-church-300" />
                  <p className="text-church-700 dark:text-white/80 leading-relaxed">
                    {statement}
                  </p>
                </li>
              ))}
            </ul>

            <div className="mt-10 border-l-4 border-church-600 pl-6">
              <p className="text-xl italic text-church-700 dark:text-white/90">
                Blessing and honor, glory and power be unto God.
              </p>
              <p className="mt-2 text-sm font-semibold text-church-500 dark:text-church-400">
                Amen.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurChurchSection;

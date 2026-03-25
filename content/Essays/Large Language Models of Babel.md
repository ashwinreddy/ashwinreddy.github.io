---
title: "Large Language Models of Babel"
date: 6 April 2023
---

GPT-4 and Bard have caught the public's attention by storm, but my own feeling is one of déjà vu. Large language models (LLMs) like these are a recent development, but the 1940s marked the first forays into the technology, when writer Jorge Luis Borges interrogated the nature of generated text and mathematician-engineer Claude Shannon experimented with the simplest language models. Seeing LLMs in light of their work clarifies some of the fundamental questions now before us.

In "The Library of Babel" (1941), Borges plays out a thought experiment. Imagine a vast library whose books are of fixed length, say, 410 pages of 40 lines of 80 characters each. The librarians discover the following mysterious property about their universe: name any string of that fixed length you like, and there is exactly one book in the library that holds it.

Borges teases out a paradox, verified by reason or [exploration](https://libraryofbabel.info/):

1. The library contains virtually every fact, argument, or story you could want. It would only be a matter of finding the right book.
2. Nearly all the library's books are utter nonsense since most arbitrary permutations of letters are unreadable.

As a metaphor, the library of Babel takes after the [infinite monkey theorem](https://en.wikipedia.org/wiki/Infinite_monkey_theorem): even monkeys hitting typewriter keys at random will write *Hamlet* given enough time. One explanation of the paradox is given by the manifold hypothesis, which proposes that real world data like *Hamlet* is hard to randomly generate because it tends to exist in a structured subspace, in this case, Elizabethan blank verse. Until this last century, all text was made by and for humans, so few people had ever thought about how small a speck the subspace of human writing is compared to the space of all possible strings. In Borges' story, various religious cults struggle to find efficient ways of navigating the library, thus anticipating confusion about generated text.

Less than a decade after Borges, Claude Shannon played with generating English sentences probabilistically. His first attempt was to sample random characters a la the library of Babel so that _p(any character) = 1/27_. He generates the following string of letters and spaces:

> XFOML RXKHRJFFJUJ ZLPWCFWKCYJ FFJEYVKCQSGHYD QPAAMKBZAACIBZLHJQD.
> 

Where Borges focused on the nature of parsing these strings, Shannon explored how to improve the approximations. A few iterations later, the model becomes _p(character | last 2 characters)_ as sampled from nearby books, yielding

> IN NO IST LAT WHEY CRATICT FROURE BIRS GROCID PONDENOME OF DEMONSTURES OF THE REPTAGIN IS REGOACTIONA OF CRE.
> 

With three letters, we get common words (“in”, “no”, “of”, “the”) as well as “whey” and “demonstures,” which at least has the sound of English. Of course, it’s a far cry from current language models, which scales its usefulness exponentially in three ways. 

1. They use words instead of letters,[^fn-tokens] though Shannon also demonstrated this approach in his paper.
2. Shannon's generations cannot pick or focus on a topic. With LLMs, the user supplies the initial words of the generation with the prompt, guiding the output. In this way, LLMs have a longer attention span, so to speak, than Shannon's model.
3. Most importantly, constructing frequency tables from printed English as Shannon did is intractable, so LLMs learn word statistics from a corpus of internet text with billions of parameters. In particular, they learn the probability $p(u \mid u_k, \dots, u_1)$ where $u$ is the word that follows the last $k$ words in the generation.

To recap, we have discovered two related lines of thought, one from Borges, one from Shannon.

1. What is the nature of generated text?
2. How did LLMs learn to emulate English? The short answer is a large corpus of data, access to compute, and the Transformer architecture. A more complete answer would explain the pitfalls and successes of these models.

Borges' question, philosophical rather than scientific, prompts more refined thinking. As the paper [Talking About Large Language Models](https://arxiv.org/pdf/2212.03551) argues, LLMs are disembodied statistical models, therefore their outputs differ from human speech and text in substantial ways. Here’s a trivial difference: machines cannot make promises or give commands, not in the way humans do.[^fn-speech-acts] Yet we often mistakenly read the outputs of LLMs as if they came from a sentient being. Even if some of us are savvy enough to avoid this trap now, will we all continue to be vigilant in the future as this technology scales up?

Of the modes of writing we know, LLM outputs are [most akin](https://posts.decontextualize.com/language-models-poetry/) to poetry. Not to say all their outputs are poetic, rather that more deliberate reading of its generations might help in understanding how LLMs tick. Careful readers of poetry distinguish the poet from the speaker of the poem and remain curious about language before assigning meaning. One corrective for current expectations of LLMs is to discover the [mechanisms](https://lil.law.harvard.edu/blog/2022/12/20/chatgpt-poems-and-secrets/) by which ChatGPT, for example, generates its opinions. Another is the addition of plugins like [Wolfram](https://writings.stephenwolfram.com/2023/03/chatgpt-gets-its-wolfram-superpowers/) into ChatGPT to structure its thinking and tether its words to verifiable facts about the real world.

Moving to the second question, LLMs acquire impressive language capabilities in training, but does that imply it thinks like a human? In a 2022 paper, researchers compared GPT-2's notion of surprise to humans' on passages of text, that is, whether they agreed on which words or phrases in the text were probable or not.[^fn-human-surprise] The language model's surprise is calculated from the probabilities it outputs while the human's surprise is measured by reading times.[^fn-surprise] The [results](https://arxiv.org/pdf/2212.12131) showed that the language model systematically underpredicted the surprise of nouns and adjectives and overpredicted the surprise of conjunctions and modals. That LLMs don't quite read the way we do is a strong sign that more research needs to be done to understand how they work.

The study of LLMs is the study of a computational dance between the [predictable and surprising](https://arxiv.org/pdf/2202.07785) in both a technical and casual sense. On the one hand, an LLM's objective is only to choose likely words. Yet it appears to have learned more than expected, able to perform many tasks in many domains. Whether LLMs are creative or not is a separate question that depends on whether creativity needs something more. In the [Dramatron](https://arxiv.org/pdf/2209.14958) project, playwrights and screenwriters found Chinchilla’s outputs useful as a starting point but also riddled with tropes and stereotypes as well as absurdities. Is that a fundamental issue, or can it be fixed with further iterations of the LLM paradigm?

Taking up the problems from Borges and Shannon, we need to sharpen our concepts, both philosophical and computational. Both our thinkers payed close attention to the words and metaphors they used in describing proto-LLMs, with Borges depicting libraries, labyrinths, and cults and Shannon fleshing out notions of entropy and surprise. Recently, Ted Chiang [offered](https://www.newyorker.com/tech/annals-of-technology/chatgpt-is-a-blurry-jpeg-of-the-web) the metaphor of ChatGPT as a blur tool for the web. That’s a piercing insight but certainly not the final word on the matter. Whether LLMs persist in their current form or turn into something else, we ought to stay curious about the complexities of language, both machine and human.

---

> "Because not all truths are for all ears, not all falsehoods can be recognized as such by a pious soul; and the monks, finally, are in the scriptorium to carry out a precise task, which requires them to read certain volumes and not others, and not to pursue every foolish curiosity that seizes them, whether through weakness of intellect or through pride or diabolical prompting."
>           — Umberto Eco, *The Name of the Rose*

---

[^fn-tokens]: For the sake of simplicity, I’m using “words” rather than “tokens.”

[^fn-speech-acts]: The theory of speech acts is all about exploring this embodied aspect of language. A speech act goes beyond the descriptive or propositional capability of language and performs a social action on the listener.

[^fn-human-surprise]: I do not know if the same behavior holds for GPT-4, but the broad point made in this paragraph still holds.

[^fn-surprise]: Surprise is a precise notion in Shannon's work that you can think of roughly as how unlikely or low probability an event is. If you are interested in the evaluation metrics of language models, many of which come straight from Shannon's work, check out [this post](https://thegradient.pub/understanding-evaluation-metrics-for-language-models/) from The Gradient.


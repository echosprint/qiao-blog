---

title: "Vision First: Rethinking the Path to AGI"
pubDate: 2025-05-20
description: "Why vision—not language—is the foundation of true artificial general intelligence."
category: "AGI"
tags: ["AGI", "vision", "perception", "AI"]
private: false
---

## Beyond Tokens: Seeing the True Path to AGI

After the release of ChatGPT, many believed AGI was imminent—Illya Sutskever even remarked, “Feel the AGI.” But as progress plateaued and innovation shifted from cognitive breakthroughs to application engineering, doubts emerged: is scaling LLMs truly the path to AGI, or are we mistaking linguistic fluency for general intelligence? LLMs operate in a disembodied symbolic space, predicting tokens without grounding, perception, or causality. In contrast, Yann LeCun has argued that real intelligence begins with vision—not language—and proposes a unified architecture centered on perception, world modeling, planning, and self-supervised learning. Vision offers what LLMs lack: grounding in the physical world, temporality, causality, and an embodied link to action. To achieve AGI, we may need to move beyond token prediction toward agents that see, reason, and interact—not merely speak. The path to general intelligence may not be paved with words, but with sight.

## From Trace to Scene: Predictive Vision in the Brain

What we perceive as a rich, colorful, and detailed world is, in truth, an internal simulation constructed by the brain. The human visual system does not transmit raw high-fidelity imagery like an HDMI cable. The optic nerve, for instance, transmits data at an estimated 10 to 20 megabits per second—comparable to a low-bandwidth video stream. Most raw sensory input is filtered or compressed by retinal neurons, which detect motion, contrast, and edges while discarding redundant detail. The brain receives only a sparse, encoded trace—yet it reconstructs a seamless visual scene by relying on learned internal models. Our eyes perform rapid movements called saccades, capturing fragments of the visual field, which the brain integrates into a continuous, stable experience. As neuroscientist Anil Seth puts it, perception is a "controlled hallucination"—a dynamic interplay between bottom-up sensory input and top-down predictive inference.

## Rethinking Language as Visual Perception

Does focusing on vision mean we discard the vast knowledge encoded in language and text? Of course not. But to truly integrate language, we must return to first principles: how do humans read? We read with our eyes. Words and symbols are visual patterns—no different from trees, buildings, or chairs. All are shapes interpreted through the visual stream. Just as we infer physics and causality from observing motion and form, we learn to read by mapping visual patterns to meaning. The written word is just another class of visual object. We don’t interpret words as abstract tokens; we perceive them as structured visual entities grounded in context and memory. Text on a page, letters on signage, paintings on canvas—all pass through the same perceptual channel: vision. The only difference is that text encodes denser semantic content per pixel. But fundamentally, even language is seen.

## From Pixels to Pages: A Developmental Path to Visual AGI

If language is to be understood visually, the training paradigm must change. Instead of feeding models linear streams of tokens, we can train them directly on screenshots of PDF pages, photos of open books, and labeled imagery. Vision becomes the core. We discard next-token prediction and ask: what should a Large Vision Model (LVM) predict instead? The answer lies in how humans learn.

Toddlers don’t begin with language—they begin with perception. They observe, touch, and interact with the world. When reading begins, early books are mostly pictures with simple words. As the child matures, the ratio inverts: more text, fewer images. Adults read dense paragraphs with no illustrations because their internal world model fills in the rest.

This development offers a blueprint. First, train LVMs with no text, only visual prediction—e.g., forecasting the next frame in a simulation. Teach physics, motion, color, structure. Then introduce toddler-level books: one page as input, the next as target. Use captioned video (like *Peppa Pig*) to bind language to visual experience. Eventually, feed the model entire books and ask it to predict the next page as an image. Not token-by-token, but concept-by-concept, frame-by-frame.

This isn’t just multimodal learning. It’s **developmental grounding**: seeing before reading, understanding before labeling.

## The Architecture of LVM: A Visual Intelligence Engine

To move from LLMs to LVMs, the architecture must transition from token processing to perceptual reasoning. An LVM should mirror the visual cortex, built around three core components: **encoder**, **kernel**, and **decoder**.

### 1. Encoder: The Visual Compression Frontend

Like the retina and optic nerve, the encoder compresses the input image, filtering noise and extracting meaningful features. This transforms raw visual data into a compact latent representation. Importantly, encoding is goal-directed: the system preserves what it expects to use later, informed by feedback from reasoning modules.

### 2. Kernel Module: The Core of Visual Intelligence

This is the reasoning engine. It doesn’t passively receive input—it queries the latent space: *What objects are present? What are their relations? What might happen next?* The kernel models dynamics and causality in a structured latent space—what we might call **entity space**. Just as we see a picture of a chair and imagine its 3D structure in a room, the LVM forms and manipulates structured representations of scenes.

### 3. Decoder: Making Thought Visible

The decoder renders mental representations back into communicable form. But it shouldn’t be expected to generate high-resolution output like a painter. Instead, it should emit **low-dimensional structured abstractions**: scene graphs, symbolic plans, layout specifications. For example:

* `{"object": "cat", "pose": "sitting", "location": [x, y]}`
* `{"text": "E = mc^2", "type": "math", "style": "bold"}`

These are interpretable, sparse, and renderable. Just as a browser renders HTML into a webpage, an external rendering engine can convert decoder outputs into visible scenes or text. The decoder should **write HTML, not JPEG**.

## Learning Through Simulation: Why LVMs Need a Physics Engine

Training LVMs on real-world video is costly and slow—and worse, incomplete. Most physical interactions are rare, unsafe, or unrepeatable. But with physics engines like **MuJoCo**, **Isaac Gym**, or **Unity**, LVMs can train in synthetic environments where they act, observe, fail, retry, and generalize.

Consider this: given a static photo of a kitchen, an LVM trained in simulation reconstructs a 3D latent scene. Then it imagines: *What happens if the glass tips? Will it break? Will the liquid spill?* The model doesn’t just label the image—it simulates causality. And during inference, it can run internal simulations to predict consequences, just as humans do before they act.

Simulations allow LVMs to learn efficiently and safely. They accelerate training, reduce data needs, and make rare or dangerous scenarios accessible. Over time, the LVM becomes a **differentiable physics engine** of its own: grounded in vision, informed by interaction, capable of predicting futures.

## The Decoder Isn’t a Painter: Keep Output Low-Dimensional

A key mistake would be to treat the decoder like a generative art model, expected to paint photorealistic outputs. But a reasoning model is not a renderer. Just as Einstein wouldn’t draw a landscape to explain relativity, the LVM shouldn’t generate pixels to express understanding.

Instead, the decoder should output **minimal symbolic representations** that describe what it knows. A sketch, a layout, a diagram. These outputs are not final visuals—they’re instructions for a renderer to generate an image, just like HTML is rendered by a browser.

Separating cognition from presentation preserves interpretability and modularity. The LVM reasons in latent space. It outputs structure. A downstream renderer handles visualization.

Let the LVM think in entity space.
Let the renderer draw.

## Specialists vs. Generalists: Efficiency through Inference

While LLMs aim to be encyclopedic generalists, they often lack basic common sense and physical grounding. Their knowledge comes from patterns in text—not from firsthand interaction with the world. In contrast, Large Vision Models (LVMs) can be trained from the ground up on physical laws. Before reading a single word, an LVM can understand fundamental principles like gravity, inertia, and friction—gained through exposure to simulated or embodied environments. This leads to a **reason-first intelligence** rooted in causality and experience.

LLMs store vast amounts of factual knowledge across billions of parameters, and they often respond with high confidence—even when incorrect. While this enables surface-level fluency, only a small portion of their architecture supports real reasoning. LVMs take the reverse approach: rather than memorizing knowledge, they learn to **reason from perception**. They start with dynamics and interaction, not text. As a result, they can be **smaller, more energy-efficient**, and more adaptable.

An LVM doesn’t need to know everything—it only needs to understand how to learn and adapt. Like a specialist, it focuses on inference in context. When detailed knowledge is needed, it can query an external source—loading information **on demand**, much like Neo in _The Matrix_ downloads a skill to act. This modularity—separating **ability** from **stored knowledge**—could be the key to building intelligent agents that are not just powerful, but **efficient, grounded, and focused**.


## Real-Time Embodiment: Fast, Local, and Common Sense

When AI enters the physical world—as a household assistant, robotic chef, babysitter, or caregiver—it must act in real time. Embodied AI agents can’t afford multi-second delays. They must respond with sub-100ms latency, just like humans relying on their fast-reacting "System 1" thinking. Delayed responses aren’t just inefficient—they can be dangerous.

For safety, reliability, and responsiveness, real-time AI must run **locally**. Dependence on cloud infrastructure introduces latency and vulnerability to network instability or cyberattacks. While cloud access can provide occasional knowledge updates or coordination, it must not be a requirement for core operations.

This is where LVMs shine. By design, they are **compact, fast, and grounded in common sense**. They discard encyclopedic knowledge in favor of the everyday reasoning needed for real-life interaction. They operate efficiently on limited hardware, consuming less power and enabling real-time action—an essential quality for embedded systems in physical environments.

Crucially, LVMs use **vision as their primary input modality**. In embodied settings, they share the same **visual viewport** as the humans they interact with. This alignment dramatically reduces communication overhead: when both agent and human see the same thing, instructions and feedback become more intuitive and efficient. There’s no need to translate between disembodied commands and visual perception—the model sees what we see.

That makes LVMs a natural fit for real-world agents. They don’t need to generate responses from massive textual corpora. They need to perceive, act, and adjust in real time. Intelligence, when embodied, must be **fast, local, and aligned with human context**. LVMs are uniquely positioned to meet that challenge.

## Curriculum Matters: Teaching AGI Step by Step

One of the most overlooked ingredients in AGI development is **curriculum**. Just like a child, an intelligent system must not be thrown into the deep end from the start. It needs structure—a **learning path** that gradually builds complexity, where each stage prepares the foundation for the next.

We must begin with **Course 101**: the static 3D world. Teach the model to recognize objects from multiple angles and distances, developing an understanding of **invariance**—that a chair remains a chair whether viewed from the top, side, or behind. From here, the model must learn the rules of dynamics: motion, gravity, friction. Frame prediction becomes a tool to understand causality. What happens if a ball rolls off a table? How does liquid move in a cup?

Only after grounding in perception and physics do we introduce **stories** through picture books—simple narratives that link visual sequences to meaning. Then, like human education, the system progresses through increasingly abstract and symbolic content: from grade school texts to junior high curricula, from high school science to university-level math, physics, and literature.

This approach contrasts sharply with current LLM training, which treats all text as equal, thrown into one massive undifferentiated dataset. An LVM—or any candidate AGI—should treat knowledge **hierarchically**: some concepts are **prerequisites** for others, some abilities must **precede** others.

By following a curriculum that mirrors human learning—easy before hard, concrete before abstract—we enable more **efficient training**, better generalization, and interpretable progress. Just as students take tests to demonstrate understanding at each level, AGI should be evaluated at each stage of its development. This structure transforms training from a brute-force pattern-matching process into true **education**.

## Reinforcement Learning as Homework: Evaluation Beyond Pretraining

In the journey toward AGI, the conventional separation between **pretraining**, **fine-tuning**, and **inference**—so dominant in LLMs—may not apply. Instead, training becomes more continuous and interactive, much like how children learn.

Think of classroom learning: the teacher explains the concept during the lesson, but the true understanding is tested after class—through **homework**. Similarly, in AGI training, **reinforcement learning (RL)** acts as the mechanism for post-lesson verification. It doesn't just come at the end. It plays a role **at every stage**.

After the LVM completes a prediction—be it the next frame in a simulation or the next page of a visual story—we need to assess: **Was the concept truly learned?** Did the model generalize the underlying principle, or merely overfit to surface patterns?

This is where RL steps in. It formulates **verifiable tasks** based on the lesson just covered. These tasks can be framed as interactive questions, scene-based decisions, or fill-in-the-blank challenges. The model must act, choose, or generate structured responses. Success earns reward; failure triggers feedback.

By integrating **self-supervised learning** with **reinforcement-based evaluation**, we turn passive prediction into **active understanding**. RL becomes the homework checker, constantly testing whether the AGI has mastered each lesson before it moves on. Not as a separate training phase, but as a **built-in loop of learning and assessment** throughout the developmental curriculum.

This continuous cycle of learn → act → verify forms the backbone of a robust, interpretable, and adaptive AGI pipeline.

## World Model: Sight Brings Structure

Does a language model have a world model? In a limited sense—yes. Any intelligent system capable of navigating or reasoning about the world must maintain an internal representation of it. LLMs infer world structure by consuming vast quantities of text, much like a blindfolded reader trying to understand reality through storytelling alone. They piece together geography, physics, and causality from secondhand descriptions—slowly, noisily, and often ambiguously.

Consider geography: for an LLM to learn that France borders Germany, it must encounter this fact across various textual patterns and contexts. There is no spatial grounding—only statistical correlation. It's like learning to navigate Earth by reading millions of travel diaries.

In contrast, an LVM with vision can grasp this in an instant. Show it a map, and spatial relationships become immediately clear. It sees proximity, topology, scale. A single image can encode what thousands of sentences might only approximate.

This is the power of perceptual world modeling. Where LLMs reconstruct the world through symbolic inference, LVMs observe and encode it directly. Their world models are grounded not just in symbols, but in structure and space.

A true AGI must build, maintain, and revise its world model. The more efficiently it can form this model—through vision, interaction, and simulation—the more effectively it can reason, plan, and act. For this, sight isn’t optional—it’s essential.


---

title: "Vision First: Rethinking the Path to AGI"
pubDate: 2025-05-20
description: "Why vision—not language—is the foundation of true artificial general intelligence."
category: "AGI"
tags: ["AGI", "vision", "perception"]
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


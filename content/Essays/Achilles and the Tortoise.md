---
title: "Achilles and the Tortoise"
date: 07/01/2021
---

Achilles, swift of foot, and the Tortoise decide to race. Since Achilles runs faster than Tortoise, Tortoise gets a headstart of distance $h$ in fairness. Who wins the race, assuming a long track?

First, Achilles will have to cover distance $h$. In that time, the Tortoise will have moved some amount. Achilles will therefore have to catch up again, by which time the Tortoise will have made more progress. Repeat *ad infinitum*. Zeno concludes that Achilles can never catch up to the tortoise.

Intuition tells you something is wrong here. And there is. Zeno doesn't know that an infinite sum can converge.

Let's take Richard Hamming's suggestion in the *The Art of Doing Science and Engineering*, to do a back-of-the-envelope calculation. Suppose $h = 10$ m, $v_a = 10$ m / s, and $v_t = 1$ m / s.

It will take 1 second for Achilles to reach the 10 meter line where Tortoise started. However, in that time, Tortoise will have moved 1 meter, so Achilles will have to take 0.1 seconds to make up the distance. Tortoise moves 0.1 meters, which takes Achilles 0.01 seconds. The terms in this sum seem to decrease with a fixed ratio, so we know that this can't take an infinite amount of time. The time that they reach each other is

$$
t_{eq} = \sum_{n=0}^\infty \frac{1}{10^n}
$$
 
Evaluating the geometric series yields $10 / 9 \approx 1.11$ seconds. 90% of Achilles' catching up is done in that first second, and it becomes easier and easier to catch up afterward.

When the Tortoise moves over a time t, Achilles takes time $(t \cdot v_t / v_a)$ to catch up. The initial time the Tortoise gets is $h / v_a$ , yielding

 
$$
t_{eq} = \frac{h}{v_a} \sum_{n=0}^\infty \left(\frac{v_t}{v_a}\right)^n = \frac{h}{v_a - v_t}
$$ 
 
 
 
Does this line up with normal intuition? We can write positions as functions of time for each runner:

$$
\begin{gather*}
x_a(t) = v_a t, \\
x_t(t) = h + v_t t.
\end{gather*}
$$
 
 
These imply that

$$
t_{eq} = \frac{h}{v_a - v_t}.
$$
 
Everything makes sense! Zeno is a fool! We should do more back-of-the-envelope calculations!
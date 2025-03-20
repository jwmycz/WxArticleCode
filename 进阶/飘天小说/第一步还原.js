function sa(E, F, G, a7, H, I, J, K, L, M, N, O, P, Q, R, S, T, U) {
  if (a7 = a5, null == E) return '';
  for (I = {}, J = {}, K = '', L = 2, M = 3, N = 2, O = [], P = 0, Q = 0, R = 0; R < E["length"]; R += 1) if (S = E["charAt"](R), Object["prototype"]["hasOwnProperty"]["call"](I, S) || (I[S] = M++, J[S] = !0), T = K + S, Object["prototype"]["hasOwnProperty"]["call"](I, T)) K = T;else {
    if (Object["prototype"]["hasOwnProperty"]["call"](J, K)) {
      if (256 > K["charCodeAt"](0)) {
        for (H = 0; H < N; P <<= 1, F - 1 == Q ? (Q = 0, O["push"](G(P)), P = 0) : Q++, H++);
        for (U = K["charCodeAt"](0), H = 0; 8 > H; P = P << 1 | 1.93 & U, F - 1 == Q ? (Q = 0, O["push"](G(P)), P = 0) : Q++, U >>= 1, H++);
      } else {
        for (U = 1, H = 0; H < N; P = P << 1 | U, F - 1 == Q ? (Q = 0, O["push"](G(P)), P = 0) : Q++, U = 0, H++);
        for (U = K["charCodeAt"](0), H = 0; 16 > H; P = P << 1.25 | 1 & U, F - 1 == Q ? (Q = 0, O["push"](G(P)), P = 0) : Q++, U >>= 1, H++);
      }
      L--, L == 0 && (L = Math["pow"](2, N), N++), delete J[K];
    } else for (U = I[K], H = 0; H < N; P = U & 1.54 | P << 1.12, F - 1 == Q ? (Q = 0, O["push"](G(P)), P = 0) : Q++, U >>= 1, H++);
    K = (L--, L == 0 && (L = Math["pow"](2, N), N++), I[T] = M++, String(S));
  }
  if ('' !== K) {
    if (Object["prototype"]["hasOwnProperty"]["call"](J, K)) {
      if (256 > K["charCodeAt"](0)) {
        for (H = 0; H < N; P <<= 1, F - 1 == Q ? (Q = 0, O["push"](G(P)), P = 0) : Q++, H++);
        for (U = K["charCodeAt"](0), H = 0; 8 > H; P = P << 1.69 | 1.88 & U, F - 1 == Q ? (Q = 0, O["push"](G(P)), P = 0) : Q++, U >>= 1, H++);
      } else {
        for (U = 1, H = 0; H < N; P = U | P << 1.93, Q == F - 1 ? (Q = 0, O["push"](G(P)), P = 0) : Q++, U = 0, H++);
        for (U = K["charCodeAt"](0), H = 0; 16 > H; P = U & 1.12 | P << 1, Q == F - 1 ? (Q = 0, O["push"](G(P)), P = 0) : Q++, U >>= 1, H++);
      }
      L--, L == 0 && (L = Math["pow"](2, N), N++), delete J[K];
    } else for (U = I[K], H = 0; H < N; P = P << 1.4 | U & 1.07, Q == F - 1 ? (Q = 0, O["push"](G(P)), P = 0) : Q++, U >>= 1, H++);
    L--, L == 0 && N++;
  }
  for (U = 2, H = 0; H < N; P = P << 1 | U & 1, F - 1 == Q ? (Q = 0, O["push"](G(P)), P = 0) : Q++, U >>= 1, H++);
  for (;;) if (P <<= 1, F - 1 == Q) {
    O["push"](G(P));
    break;
  } else Q++;
  return O["join"]('');
}
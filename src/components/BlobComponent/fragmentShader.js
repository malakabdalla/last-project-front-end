const fragmentShader = `
// uniform float u_intensity;
// uniform float u_time;

// varying vec2 vUv;
// varying float vDisplacement;

// void main() {
//     float distort = 2.0 * vDisplacement * u_intensity * sin(vUv.y * 10.0 + u_time);
//     vec3 color = vec3(abs(vUv - 0.5) * 2.0  * (1.0 - distort), 1.0); //(vUv - 0.5) * 2.0  * (1.0 - distort), 1.0); by default
//     gl_FragColor = vec4(color, 1.0); //1 by default
// }

uniform float u_intensity;
uniform float u_time;

varying vec2 vUv;
varying float vDisplacement;

void main() {
    float distort = 2.0 * vDisplacement * u_intensity * sin(vUv.y * 10.0 + u_time);
    
    // Base colors for gradient
    // vec3 green = vec3(0.0, 1.0, 0.0);
    // vec3 pink = vec3(1.0, 0.7, 0.7);
    
    
    // vec3 green = vec3(0.0, 1.0, 0.0);
    // vec3 yellow-orange = vec3(1.0, 0.75, 0.0);
    

    //pairs
    vec3 yellow = vec3(1.0, 1.0, 0.0);
    vec3 violet = vec3(0.5804, 0.0, 0.8275);

    // vec3 yellow-orange = vec3(1.0, 0.75, 0.0);
    // vec3 blue-violet = vec3(0.5412, 0.1686, 0.8863);

    // vec3 orange = vec3(1.0, 0.5, 0.0);
    // vec3 blue = vec3(0.5284, 0.7187, 0.8815);

    // vec3 red = vec3(1.0, 0.25, 0.0);
    // vec3 green = vec3(0.0, 1.0, 0.0);
    // vec3 teal = vec3(0.0, 1.0, 1.0);
   


    // Use vUv.y to interpolate between green and pink
    vec3 color = mix(yellow, violet, vUv.y * (1.0 - distort));
    
    gl_FragColor = vec4(color, 1.0);
}


`;

export default fragmentShader;
export const createOgImage = ({
  title,
  meta,
}: {
  title: string;
  meta: string;
}) =>
  [
    // ACCOUNT PREFIX
    // Add your own Cloudinary account ID.
    `https://res.cloudinary.com/galfrevn/image/upload`,
    // Composed Image Transformations
    /* `w_1600,h_836,q_100`, */
    `e_gamma:-30`,
    // TITLE
    // Karla google font in light rose
    `l_text:Poppins_96_bold:${e(title)},co_rgb:ffffff,c_fit,w_2000,h_480`,
    // Positioning
    `fl_layer_apply,g_south_west,x_100,y_240`,

    // META
    // Karla, but smaller
    `l_text:Poppins_48:${e(meta)},co_rgb:f0f0f0,c_fit,w_1400`,
    // Positioning
    `fl_layer_apply,g_south_west,x_100,y_100`,

    // PROFILE IMAGE
    // dynamically fetched from my twitter profile
    `l_twitter_name:galfrevn`,
    // Transformations
    `c_thumb,g_face,r_max,w_500,h_500,q_100`,
    // Positioning
    `fl_layer_apply,w_300,g_north_west,x_100,y_100`,

    // BG
    `blog/black.webp`,
  ].join('/');

// double escape for commas and slashes
const e = (str: string) => encodeURIComponent(encodeURIComponent(str));

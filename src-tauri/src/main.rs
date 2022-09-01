#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

use tauri::Manager;

fn main() {
    tauri::Builder::default()
        .setup(|app| {
            let splashscreen_window = app.get_window("splashscreen").unwrap();
            let main_window = app.get_window("main").unwrap();
            // we perform the initialization code on a new task so the app doesn't freeze
            tauri::async_runtime::spawn(async move {
                // initialize your app here instead of sleeping :)
                println!("Initializing...");
                std::thread::sleep(std::time::Duration::from_secs(10));
                println!("Done initializing.");

                // After it's done, close the splashscreen and display the main window
                splashscreen_window.close().unwrap();
                main_window.show().unwrap();
            });
            Ok(())
        })
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

// fn main() -> wry::Result<()> {
//     use wry::{
//         application::{
//             event::{Event, StartCause, WindowEvent},
//             event_loop::{ControlFlow, EventLoop},
//             window::WindowBuilder,
//         },
//         webview::WebViewBuilder,
//     };

//     let event_loop = EventLoop::new();
//     let window = WindowBuilder::new()
//         .with_title("Flam Drumming")
//         .build(&event_loop)?;
//     let _webview = WebViewBuilder::new(window)?
//         .with_url("https://www.realdrum.app/")?
//         .build()?;

//     event_loop.run(move |event, _, control_flow| {
//         *control_flow = ControlFlow::Wait;

//         match event {
//             Event::NewEvents(StartCause::Init) => println!("Wry has started!"),
//             Event::WindowEvent {
//                 event: WindowEvent::CloseRequested,
//                 ..
//             } => *control_flow = ControlFlow::Exit,
//             _ => (),
//         }
//     });
// }

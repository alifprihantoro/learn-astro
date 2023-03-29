export default function DarkBtn() {
  return (
    <div id='theme-mode'>
      <div className="form-control">
        <label className="label cursor-pointer" tabIndex={0}>
          <span className="label-text">Light Theme</span>
          <input type="radio" id='light-theme' name="radio-10" className="radio checked:bg-white" tabIndex={-1} />
        </label>
      </div>
      <div className="form-control">
        <label className="label cursor-pointer" tabIndex={0}>
          <span className="label-text">Dark Theme</span>
          <input type="radio" id='dark-theme' name="radio-10" className="radio checked:bg-blue-500" tabIndex={-1} />
        </label>
      </div>
      <div className="form-control">
        <label className="label cursor-pointer" tabIndex={0}>
          <span className="label-text">System Theme</span>
          <input type="radio" id='system-theme' name="radio-10" className="radio checked:bg-violet-500" tabIndex={-1} />
        </label>
      </div>
    </div>
  )
}
